import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkBotId } from 'botid/server';
import { allowedRequestOrigins, siteConfig } from '@/lib/site-config';

const MAX_BODY_BYTES = 12_000;
const MAX_NAME_LENGTH = 100;
const MAX_COMPANY_LENGTH = 160;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_PER_IP = 10;
const RATE_LIMIT_MAX_PER_EMAIL = 5;

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  __aegrixContactRateLimit?: Map<string, RateLimitRecord>;
};

const rateLimitStore =
  globalForRateLimit.__aegrixContactRateLimit ?? new Map<string, RateLimitRecord>();

globalForRateLimit.__aegrixContactRateLimit = rateLimitStore;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function jsonResponse(
  body: Record<string, unknown>,
  init: ResponseInit = {}
) {
  const headers = new Headers(init.headers);
  headers.set('Cache-Control', 'no-store, max-age=0');
  headers.set('Pragma', 'no-cache');

  return NextResponse.json(body, { ...init, headers });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim() || 'unknown';
  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

async function hashRateLimitKey(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

function safeHeader(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string) {
  if (email.length > MAX_EMAIL_LENGTH || /[\r\n\0]/.test(email)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedRequestContext(request: Request) {
  const secFetchSite = request.headers.get('sec-fetch-site')?.toLowerCase();
  if (secFetchSite && !['same-origin', 'same-site', 'none'].includes(secFetchSite)) {
    return false;
  }

  const origin = request.headers.get('origin');
  if (!origin) {
    return process.env.NODE_ENV !== 'production' || secFetchSite === 'same-origin' || secFetchSite === 'same-site';
  }

  const requestOrigin = new URL(request.url).origin;
  const allowedOrigins = new Set([requestOrigin, ...allowedRequestOrigins]);

  return allowedOrigins.has(origin);
}

function consumeRateLimit(key: string, maxRequests: number) {
  const now = Date.now();

  for (const [storedKey, record] of rateLimitStore) {
    if (record.resetAt <= now) rateLimitStore.delete(storedKey);
  }

  const current = rateLimitStore.get(key);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return { allowed: true, retryAfterSeconds: 0 };
}

function localizedError(lang: string, es: string, en: string) {
  return lang === 'en' ? en : es;
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return jsonResponse({ error: 'Unsupported content type' }, { status: 415 });
  }

  if (!isAllowedRequestContext(request)) {
    return jsonResponse({ error: 'Request origin not allowed' }, { status: 403 });
  }

  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (!Number.isFinite(declaredLength) || declaredLength < 0) {
    return jsonResponse({ error: 'Invalid content length' }, { status: 400 });
  }

  if (declaredLength > MAX_BODY_BYTES) {
    return jsonResponse({ error: 'Request too large' }, { status: 413 });
  }

  try {
    const verification = await checkBotId();
    if (verification.isBot) {
      return jsonResponse({ error: 'Automated request denied' }, { status: 403 });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'Request too large' }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody) as Record<string, unknown>;
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, { status: 400 });
    }

    const lang = body.lang === 'en' ? 'en' : 'es';
    const name = asTrimmedString(body.name);
    const company = asTrimmedString(body.company);
    const email = asTrimmedString(body.email).toLowerCase();
    const message = asTrimmedString(body.message);
    const honeypot = asTrimmedString(body.website);
    const privacyConsent = body.privacyConsent === true;
    const marketingConsent = body.marketingConsent === true;

    if (honeypot) {
      return jsonResponse({ success: true });
    }

    if (!name || !email || !message || !privacyConsent) {
      return jsonResponse(
        {
          error: localizedError(
            lang,
            'Completa los campos obligatorios y autoriza el tratamiento necesario para responder tu solicitud.',
            'Complete the required fields and authorize the processing needed to answer your request.'
          ),
        },
        { status: 400 }
      );
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      company.length > MAX_COMPANY_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return jsonResponse(
        {
          error: localizedError(
            lang,
            'Uno o más campos superan la longitud permitida.',
            'One or more fields exceed the allowed length.'
          ),
        },
        { status: 400 }
      );
    }

    if (/\0/.test(name) || /\0/.test(company) || /\0/.test(message) || /[\r\n]/.test(name) || /[\r\n]/.test(company)) {
      return jsonResponse(
        { error: localizedError(lang, 'El contenido del formulario no es válido.', 'The form content is not valid.') },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return jsonResponse(
        { error: localizedError(lang, 'Formato de correo inválido.', 'Invalid email format.') },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);
    const [ipKeyHash, emailKeyHash] = await Promise.all([
      hashRateLimitKey(`ip:${clientIp}`),
      hashRateLimitKey(`email:${email}`),
    ]);

    const ipRateLimit = consumeRateLimit(`ip:${ipKeyHash}`, RATE_LIMIT_MAX_PER_IP);
    const emailRateLimit = consumeRateLimit(`email:${emailKeyHash}`, RATE_LIMIT_MAX_PER_EMAIL);

    if (!ipRateLimit.allowed || !emailRateLimit.allowed) {
      const retryAfterSeconds = Math.max(
        ipRateLimit.retryAfterSeconds,
        emailRateLimit.retryAfterSeconds
      );

      return jsonResponse(
        {
          error: localizedError(
            lang,
            'Has enviado varias solicitudes seguidas. Inténtalo de nuevo en unos minutos.',
            'You have sent several requests in a short period. Please try again in a few minutes.'
          ),
        },
        {
          status: 429,
          headers: { 'Retry-After': String(retryAfterSeconds) },
        }
      );
    }

    const reference = crypto.randomUUID().split('-')[0].toUpperCase();
    const submittedAt = new Date().toISOString();
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || (lang === 'en' ? 'Not specified' : 'No especificada'));
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);
    const subject = `Nuevo contacto AEGRIX [${reference}] - ${safeHeader(name)}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; background:#f3f7fb; color:#171717; margin:0; padding:32px 16px; }
          .container { max-width:600px; margin:0 auto; background:#fff; border:1px solid #e5e7eb; border-radius:14px; overflow:hidden; }
          .header { background:#0b111c; color:#fff; padding:24px; font-size:20px; font-weight:700; }
          .header span { color:#00c2ff; }
          .content { padding:28px 24px; }
          .row { margin-bottom:16px; }
          .label { font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:#64748b; font-weight:700; margin-bottom:4px; }
          .value { font-size:14px; color:#171717; overflow-wrap:anywhere; }
          .message { white-space:pre-wrap; background:#f8fafc; border:1px solid #e5e7eb; border-radius:8px; padding:16px; line-height:1.6; }
          .meta { margin-top:24px; padding-top:16px; border-top:1px solid #e5e7eb; font-size:12px; color:#64748b; }
          .footer { background:#f8fafc; padding:16px 24px; font-size:11px; color:#64748b; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">AEGRIX<span>.</span> · Solicitud ${reference}</div>
          <div class="content">
            <div class="row"><div class="label">Nombre</div><div class="value">${safeName}</div></div>
            <div class="row"><div class="label">Empresa</div><div class="value">${safeCompany}</div></div>
            <div class="row"><div class="label">Correo</div><div class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></div></div>
            <div class="row"><div class="label">Idioma</div><div class="value">${lang === 'en' ? 'English' : 'Español'}</div></div>
            <div class="row"><div class="label">Mensaje</div><div class="value message">${safeMessage}</div></div>
            <div class="meta">
              Tratamiento necesario para responder: Sí<br>
              Comunicaciones comerciales: ${marketingConsent ? 'Sí' : 'No'}<br>
              Fecha UTC: ${escapeHtml(submittedAt)}
            </div>
          </div>
          <div class="footer">Mensaje recibido desde el formulario de contacto de aegrix.com.co.</div>
        </div>
      </body>
      </html>
    `;

    if (!resend) {
      if (process.env.NODE_ENV === 'production') {
        console.error('[contact] Email provider is not configured in production.');
        return jsonResponse(
          {
            error: localizedError(
              lang,
              'El formulario no está disponible temporalmente. Contáctanos por WhatsApp o correo.',
              'The form is temporarily unavailable. Please contact us by WhatsApp or email.'
            ),
          },
          { status: 503 }
        );
      }

      console.info('[contact] Development dry run completed; no personal data logged.');
      return jsonResponse({ success: true, dryRun: true, reference });
    }

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || siteConfig.defaultSenderEmail,
      to: process.env.CONTACT_TO_EMAIL || siteConfig.contactEmail,
      replyTo: email,
      subject,
      html: emailHtml,
    });

    if (response.error) {
      console.error('[contact] Resend delivery failed.');
      return jsonResponse(
        {
          error: localizedError(
            lang,
            'No pudimos enviar tu solicitud. Inténtalo de nuevo o usa WhatsApp.',
            'We could not send your request. Please try again or use WhatsApp.'
          ),
        },
        { status: 502 }
      );
    }

    return jsonResponse({ success: true, reference });
  } catch {
    console.error('[contact] Unexpected contact endpoint failure.');
    return jsonResponse(
      { error: 'Unable to process contact request' },
      { status: 500 }
    );
  }
}
