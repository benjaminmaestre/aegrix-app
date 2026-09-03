export const runtime = 'edge';

import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';
import { legalIdentity } from '@/lib/legal-identity';

export default async function CookiesPolicyPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { cookies } = dict.legal;
  const lastUpdated = lang === 'es' ? '3 de septiembre de 2026' : 'September 3, 2026';

  return (
    <LegalPageLayout title={cookies.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>Esta Política de Cookies explica las tecnologías de almacenamiento, seguridad y medición utilizadas en <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>. Las tecnologías no necesarias no se activan por el simple hecho de navegar: dependen de la elección del usuario.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Responsable</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEs}<br />
            Marca: {legalIdentity.brand}<br />
            {legalIdentity.taxIdLabelEs}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEs}<br />
            <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>

          <h2>2. Tecnologías que utiliza el sitio</h2>
          <p>El sitio puede utilizar cookies, almacenamiento local, scripts y señales técnicas necesarias para recordar preferencias, proteger formularios, prevenir abuso y, si el usuario lo autoriza, medir el uso del sitio.</p>

          <h2>3. Categorías</h2>
          <ul>
            <li><strong>Necesarias:</strong> operación, seguridad, preferencias indispensables y controles antiabuso. No pueden desactivarse desde el panel cuando son imprescindibles para el funcionamiento.</li>
            <li><strong>Analítica:</strong> medición agregada del uso mediante Google Analytics. Solo se activa con consentimiento de analítica.</li>
            <li><strong>Funcionales:</strong> funcionalidades opcionales que requieran recordar preferencias adicionales. Se activan únicamente cuando corresponda y existe consentimiento.</li>
            <li><strong>Marketing:</strong> tecnologías publicitarias o de medición comercial opcional. Actualmente el sitio no necesita activar un proveedor de marketing para funcionar y esta categoría permanece desactivada salvo elección y uso futuro informado.</li>
          </ul>

          <h2>4. Proveedores actuales</h2>
          <ul>
            <li><strong>Vercel:</strong> infraestructura, hosting y mecanismos técnicos de seguridad/antiabuso, incluidos controles relacionados con BotID cuando aplica.</li>
            <li><strong>Google Analytics:</strong> analítica opcional, cargada únicamente después de consentimiento.</li>
          </ul>
          <p>Resend procesa el contenido enviado por el formulario de contacto, pero no se utiliza como tecnología de seguimiento del navegador.</p>

          <h2>5. Preferencias y almacenamiento local</h2>
          <p>AEGRIX guarda localmente la decisión del usuario para no solicitarla en cada visita. La preferencia puede incluir las categorías necesarias, analítica, funcionales y marketing, junto con la fecha de actualización. El usuario puede modificarla desde <strong>Preferencias de cookies</strong> en el footer o eliminar el almacenamiento desde su navegador.</p>

          <h2>6. Consentimiento</h2>
          <p>Las cookies o tecnologías opcionales requieren una acción afirmativa en el banner o panel de configuración. Continuar navegando, cerrar una página o ignorar el banner no equivale a aceptar analítica, funcionales o marketing.</p>

          <h2>7. Rechazo y retiro</h2>
          <p>El usuario puede rechazar las categorías no necesarias y seguir utilizando las funciones esenciales del sitio. También puede cambiar o retirar su decisión posteriormente desde el footer. El retiro no afecta la licitud del tratamiento realizado antes de la modificación.</p>

          <h2>8. Google Analytics</h2>
          <p>Google Analytics no se monta en la página mientras la preferencia de analítica sea falsa o no exista. Los eventos configurados por AEGRIX se limitan a interacciones como clics en WhatsApp, acceso al Portal 360, CTA de diagnóstico y envío exitoso del formulario; no deben incluir nombre, correo ni contenido del mensaje como parámetros de analítica.</p>

          <h2>9. Seguridad y BotID</h2>
          <p>Algunas señales técnicas pueden utilizarse como parte de controles necesarios para detectar automatización o abuso del formulario. Estas funciones se justifican por la necesidad de proteger el sitio y no se utilizan como perfil publicitario.</p>

          <h2>10. Duración</h2>
          <p>La preferencia local se conserva hasta que el usuario la cambie, elimine los datos del navegador o el sitio requiera solicitar nuevamente una decisión. Las tecnologías de terceros, cuando se activan, pueden tener sus propios periodos técnicos de expiración conforme a la configuración y política del proveedor.</p>

          <h2>11. Transferencias y procesamiento internacional</h2>
          <p>Vercel y Google pueden procesar información en infraestructura internacional. AEGRIX limita el uso a las finalidades descritas y aplica su Política de Privacidad y las reglas colombianas correspondientes.</p>

          <h2>12. Navegadores y dispositivos</h2>
          <p>Además del panel del sitio, el usuario puede borrar o bloquear tecnologías desde la configuración de su navegador. Bloquear tecnologías necesarias a nivel del navegador puede afectar funciones esenciales.</p>

          <h2>13. Cambios</h2>
          <p>Si se incorpora una nueva tecnología opcional o se modifica materialmente la finalidad de una categoría, esta política y el mecanismo de consentimiento se actualizarán antes de utilizarla cuando corresponda.</p>

          <h2>14. Contacto</h2>
          <p>Consultas sobre cookies o privacidad: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>.</p>
        </>
      ) : (
        <>
          <p>This Cookies Policy explains storage, security and measurement technologies used on <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>. Non-essential technologies are not enabled merely by browsing; they depend on the user&apos;s choice.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Controller</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEn}<br />
            Brand: {legalIdentity.brand}<br />
            {legalIdentity.taxIdLabelEn}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEn}<br />
            <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>

          <h2>2. Technologies</h2>
          <p>The site may use cookies, local storage, scripts and technical signals required to remember preferences, protect forms, prevent abuse and, when authorized, measure website use.</p>

          <h2>3. Categories</h2>
          <ul>
            <li><strong>Necessary:</strong> operation, security and essential preferences.</li>
            <li><strong>Analytics:</strong> aggregate measurement through Google Analytics, enabled only after analytics consent.</li>
            <li><strong>Functional:</strong> optional functionality that requires additional stored preferences, enabled only when applicable and consented.</li>
            <li><strong>Marketing:</strong> optional advertising or commercial measurement technologies. No marketing provider is required for the current site to function.</li>
          </ul>

          <h2>4. Current Providers</h2>
          <ul>
            <li><strong>Vercel:</strong> infrastructure, hosting and technical security/antiabuse mechanisms, including BotID-related controls where applicable.</li>
            <li><strong>Google Analytics:</strong> optional analytics loaded only after consent.</li>
          </ul>
          <p>Resend processes contact-form messages but is not used as a browser tracking technology.</p>

          <h2>5. Preference Storage</h2>
          <p>AEGRIX stores the user&apos;s category decision locally so it does not need to be requested on every visit. Preferences can be changed through the footer or removed through the browser.</p>

          <h2>6. Consent</h2>
          <p>Optional categories require an affirmative action. Continuing to browse, closing a page or ignoring the banner does not mean accepting analytics, functional or marketing technologies.</p>

          <h2>7. Rejection and Withdrawal</h2>
          <p>Users can reject non-essential categories and continue using essential site functions, and can later change or withdraw their preference.</p>

          <h2>8. Google Analytics</h2>
          <p>Google Analytics is not mounted while analytics consent is absent or false. Configured events are limited to interactions such as WhatsApp clicks, Portal 360 access, diagnostic CTAs and successful contact-form submission, without sending names, email addresses or message content as analytics parameters.</p>

          <h2>9. Security and BotID</h2>
          <p>Technical signals may be used as necessary security controls to detect automation or form abuse. They are not used as advertising profiles.</p>

          <h2>10. Duration</h2>
          <p>Local preferences remain until changed, browser data is cleared, or the site must request a new decision. Activated third-party technologies may have their own technical expiration periods.</p>

          <h2>11. International Processing</h2>
          <p>Vercel and Google may process information internationally. AEGRIX limits use to the stated purposes and applies its Privacy Policy and applicable Colombian rules.</p>

          <h2>12. Browsers and Devices</h2>
          <p>Users may also delete or block technologies through browser settings. Blocking necessary technologies at browser level may affect essential functions.</p>

          <h2>13. Changes</h2>
          <p>New optional technologies or material purpose changes will be reflected in this policy and consent mechanism before use where required.</p>

          <h2>14. Contact</h2>
          <p>Cookie and privacy questions: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>.</p>
        </>
      )}
    </LegalPageLayout>
  );
}
