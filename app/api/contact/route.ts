import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { checkBotId } from 'botid/server';
import { CONTACT_BOT_CHECK_LEVEL } from '@/lib/botid-config';
import { allowedRequestOrigins, siteConfig } from '@/lib/site-config';

const MAX_BODY_BYTES = 12_000;
const MAX_NAME_LENGTH = 100;
const MAX_COMPANY_LENGTH = 160;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 4_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_PER_IP = 10;
const RATE_LIMIT_MAX_PER_EMAIL = 5;
const RATE_LIMIT_STORE_MAX_ENTRIES = 2_000;
const RATE_LIMIT_SWEEP_INTERVAL_MS = 60 * 1000;
const EXPECTED_BODY_FIELDS = new Set([
  'name',
  'company',
  'email',
  'message',
  'website',
  'privacyConsent',
  'marketingConsent',
  'lang',
]);
const FORBIDDEN_CONTROL_CHARACTERS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  __aegrixContactRateLimit?: Map<string, RateLimitRecord>;
  __aegrixContactRateLimitLastSweep?: number;
};

const rateLimitStore =
  globalForRateLimit.__aegrixContactRateLimit ?? new Map<string, RateLimitRecord>();

globalForRateLimit.__aegrixContactRateLimit = rateLimitStore;

globalForRateLimit.__aegrixContactRateLimitLastSweep ??= 0;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

function jsonResponse(
  body: Record<string, unknown>,
  init: ResponseInit = {}
) {
  const headers = new Headers(init.headers);
  headers.set('Cache-Control', 'no-store, max-age=0');
  headers.set('Pragma', 'no-cache');
  headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  headers.set('Vary', 'Origin, Sec-Fetch-Site');

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

function asNormalizedString(value: unknown) {
  return typeof value === 'string' ? value.normalize('NFC').trim() : '';
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function hasOnlyExpectedBodyFields(body: Record<string, unknown>) {
  return Object.keys(body).every((key) => EXPECTED_BODY_FIELDS.has(key));
}

function hasValidBodyTypes(body: Record<string, unknown>) {
  return (
    typeof body.name === 'string' &&
    (body.company === undefined || typeof body.company === 'string') &&
    typeof body.email === 'string' &&
    typeof body.message === 'string' &&
    (body.website === undefined || typeof body.website === 'string') &&
    typeof body.privacyConsent === 'boolean' &&
    (body.marketingConsent === undefined || typeof body.marketingConsent === 'boolean') &&
    (body.lang === undefined || body.lang === 'es' || body.lang === 'en')
  );
}

function containsForbiddenControlCharacters(value: string) {
  return FORBIDDEN_CONTROL_CHARACTERS.test(value);
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
    return (
      process.env.NODE_ENV !== 'production' ||
      secFetchSite === 'same-origin' ||
      secFetchSite === 'same-site'
    );
  }

  let requestOrigin: string;
  try {
    requestOrigin = new URL(request.url).origin;
  } catch {
    return false;
  }

  const allowedOrigins = new Set([requestOrigin, ...allowedRequestOrigins]);
  return allowedOrigins.has(origin);
}

function pruneRateLimitStore(now: number) {
  const lastSweep = globalForRateLimit.__aegrixContactRateLimitLastSweep ?? 0;
  const shouldSweep =
    now - lastSweep >= RATE_LIMIT_SWEEP_INTERVAL_MS ||
    rateLimitStore.size >= RATE_LIMIT_STORE_MAX_ENTRIES;

  if (!shouldSweep) return;

  for (const [storedKey, record] of rateLimitStore) {
    if (record.resetAt <= now) rateLimitStore.delete(storedKey);
  }

  while (rateLimitStore.size >= RATE_LIMIT_STORE_MAX_ENTRIES) {
    const oldestKey = rateLimitStore.keys().next().value as string | undefined;
    if (!oldestKey) break;
    rateLimitStore.delete(oldestKey);
  }

  globalForRateLimit.__aegrixContactRateLimitLastSweep = now;
}

function consumeRateLimit(key: string, maxRequests: number) {
  const now = Date.now();
  pruneRateLimitStore(now);

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
  if (!/^application\/json(?:\s*;|$)/i.test(contentType)) {
    return jsonResponse({ error: 'Unsupported content type' }, { status: 415 });
  }

  if (!isAllowedRequestContext(request)) {
    return jsonResponse({ error: 'Request origin not allowed' }, { status: 403 });
  }

  const rawContentLength = request.headers.get('content-length');
  if (rawContentLength) {
    const declaredLength = Number(rawContentLength);
    if (!Number.isFinite(declaredLength) || declaredLength < 0) {
      return jsonResponse({ error: 'Invalid content length' }, { status: 400 });
    }

    if (declaredLength > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'Request too large' }, { status: 413 });
    }
  }

  try {
    const verification = await checkBotId({
      advancedOptions: {
        checkLevel: CONTACT_BOT_CHECK_LEVEL,
      },
    });

    if (verification.isBot) {
      return jsonResponse({ error: 'Automated request denied' }, { status: 403 });
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return jsonResponse({ error: 'Request too large' }, { status: 413 });
    }

    let parsedBody: unknown;
    try {
      parsedBody = JSON.parse(rawBody) as unknown;
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (
      !isPlainObject(parsedBody) ||
      !hasOnlyExpectedBodyFields(parsedBody) ||
      !hasValidBodyTypes(parsedBody)
    ) {
      return jsonResponse({ error: 'Invalid request body' }, { status: 400 });
    }

    const body = parsedBody;
    const lang = body.lang === 'en' ? 'en' : 'es';
    const name = asNormalizedString(body.name);
    const company = asNormalizedString(body.company);
    const email = asNormalizedString(body.email).toLowerCase();
    const message = asNormalizedString(body.message);
    const honeypot = asNormalizedString(body.website);
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

    if (
      containsForbiddenControlCharacters(name) ||
      containsForbiddenControlCharacters(company) ||
      containsForbiddenControlCharacters(email) ||
      containsForbiddenControlCharacters(message) ||
      /[\r\n]/.test(name) ||
      /[\r\n]/.test(company)
    ) {
      return jsonResponse(
        {
          error: localizedError(
            lang,
            'El contenido del formulario no es válido.',
            'The form content is not valid.'
          ),
        },
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
