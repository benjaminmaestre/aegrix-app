export const runtime = 'edge';

import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';
import { legalIdentity } from '@/lib/legal-identity';

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { security } = dict.legal;
  const lastUpdated = lang === 'es' ? '3 de septiembre de 2026' : 'September 3, 2026';

  return (
    <LegalPageLayout title={security.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>La seguridad de la información forma parte del diseño, operación y prestación de servicios de AEGRIX. Esta política resume los controles generales aplicados al sitio web, los canales digitales y el proceso de reporte responsable de vulnerabilidades.</p>

          <hr className="border-aegrix-border my-8" />

          <h2>1. Responsable y contacto</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEs}<br />
            Marca: {legalIdentity.brand}<br />
            {legalIdentity.taxIdLabelEs}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEs}<br />
            Correo: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>

          <h2>2. Alcance</h2>
          <p>Esta política aplica al sitio <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>, sus formularios, canales oficiales y servicios digitales administrados directamente por AEGRIX. Los entornos de clientes se rigen adicionalmente por su alcance contractual y autorizaciones específicas.</p>

          <h2>3. Principios</h2>
          <p>AEGRIX orienta sus controles por confidencialidad, integridad, disponibilidad, mínimo privilegio, defensa en profundidad, minimización de datos, trazabilidad, actualización continua y responsabilidad compartida.</p>

          <h2>4. Controles aplicados al sitio web</h2>
          <ul>
            <li>Validación server-side y límites de tamaño en el formulario de contacto.</li>
            <li>Escape de contenido y controles frente a inyección de cabeceras.</li>
            <li>Control de origen y contexto de solicitudes.</li>
            <li>BotID, honeypot y rate limiting para reducir automatización y abuso.</li>
            <li>Política CSP, HSTS y headers de aislamiento y protección del navegador.</li>
            <li>Respuestas de API sin caché para solicitudes de contacto.</li>
            <li>Gestión de dependencias con auditoría automática en CI.</li>
            <li>Registro de errores sin exponer el contenido completo de datos personales.</li>
          </ul>

          <h2>5. Formulario de contacto</h2>
          <p>El formulario limita tamaño y longitud de campos, valida el correo, separa consentimiento necesario y marketing opcional, aplica controles antiabuso y evita devolver éxito en producción cuando el proveedor de correo no está disponible.</p>

          <h2>6. Seguridad del navegador y transporte</h2>
          <p>El sitio utiliza HTTPS y configura controles como Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, protección contra framing/clickjacking, Referrer-Policy, Permissions-Policy y políticas de aislamiento cross-origin.</p>

          <h2>7. Dependencias y despliegue</h2>
          <p>Los cambios pasan por un flujo automatizado que instala dependencias, audita vulnerabilidades relevantes de producción, ejecuta lint y construye la aplicación antes de considerar el cambio válido. Las actualizaciones de seguridad se priorizan según exposición y severidad.</p>

          <h2>8. Ciberseguridad y AEGRIX 360</h2>
          <p>Los servicios de assessment, readiness y assurance se ejecutan conforme al alcance contratado. NIST, ISO/IEC 27001/27002, HIPAA Security Rule y GDPR pueden formar parte del trabajo cuando correspondan, sin presentar una evaluación como certificación o garantía absoluta de cumplimiento.</p>

          <h2>9. Gestión de accesos</h2>
          <p>Los accesos a activos de clientes deben limitarse al mínimo necesario, mantenerse únicamente durante el trabajo autorizado y revocarse o rotarse al terminar cuando corresponda. No deben compartirse credenciales por el formulario público.</p>

          <h2>10. Proveedores</h2>
          <p>La operación del sitio depende de proveedores tecnológicos como Vercel y Resend, y puede utilizar Google Analytics después de consentimiento. AEGRIX revisa sus propias configuraciones y minimiza la información enviada, pero cada proveedor mantiene responsabilidad sobre su infraestructura.</p>

          <h2>11. Incidentes</h2>
          <p>Los incidentes relevantes se evaluarán según alcance, impacto, información comprometida y obligaciones contractuales o legales. Cuando exista obligación de notificación a un cliente, titular o autoridad, se actuará conforme al marco aplicable y a la información disponible.</p>

          <h2>12. Reporte responsable de vulnerabilidades</h2>
          <p>Los investigadores o usuarios pueden reportar una vulnerabilidad a <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a> utilizando el asunto <strong>{legalIdentity.securitySubject}</strong>.</p>
          <p>El reporte debería incluir la URL o activo afectado, descripción del problema, pasos mínimos para reproducirlo, impacto estimado y evidencia técnica que no contenga datos personales innecesarios.</p>

          <h2>13. Reglas de investigación responsable</h2>
          <ul>
            <li>No acceder, descargar, modificar ni divulgar datos de terceros.</li>
            <li>No realizar denegación de servicio, spam, ingeniería social, malware ni pruebas destructivas.</li>
            <li>No persistir acceso ni escalar privilegios más allá de lo estrictamente necesario para demostrar el hallazgo.</li>
            <li>Detener la prueba si aparece información personal, confidencial o un riesgo de afectar disponibilidad.</li>
            <li>No publicar detalles antes de permitir una oportunidad razonable de revisión y corrección.</li>
          </ul>

          <h2>14. Alcance de autorización para investigadores</h2>
          <p>La existencia de esta política no concede autorización general para pruebas de penetración. AEGRIX permite únicamente la observación y validación mínima, no destructiva y de buena fe necesaria para documentar un posible hallazgo en activos públicos administrados directamente por AEGRIX. Para pruebas más profundas se requiere autorización escrita previa.</p>

          <h2>15. Confidencialidad y privacidad</h2>
          <p>Los reportes de seguridad serán utilizados para analizar y corregir el hallazgo. AEGRIX solicita evitar incluir credenciales, datos de clientes o información personal que no sea necesaria.</p>

          <h2>16. Respaldo, continuidad y terceros</h2>
          <p>Los compromisos de respaldo, disponibilidad, recuperación y continuidad de proyectos de clientes se definen por contrato. Para el sitio corporativo se utilizan mecanismos de despliegue y proveedor orientados a recuperación y disponibilidad, sin prometer disponibilidad absoluta.</p>

          <h2>17. Actualizaciones</h2>
          <p>Esta política puede actualizarse cuando cambien la arquitectura, los proveedores, los controles o las obligaciones aplicables.</p>
        </>
      ) : (
        <>
          <p>Information security is part of AEGRIX&apos;s design, operations and service delivery. This policy summarizes general controls applied to the website and the responsible vulnerability disclosure process.</p>

          <hr className="border-aegrix-border my-8" />

          <h2>1. Responsible Party and Contact</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEn}<br />
            Brand: {legalIdentity.brand}<br />
            {legalIdentity.taxIdLabelEn}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEn}<br />
            Email: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>

          <h2>2. Scope</h2>
          <p>This policy applies to <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>, its forms, official channels and digital services directly administered by AEGRIX.</p>

          <h2>3. Principles</h2>
          <p>AEGRIX applies confidentiality, integrity, availability, least privilege, defense in depth, data minimization, traceability, continuous updates and shared responsibility.</p>

          <h2>4. Website Controls</h2>
          <ul>
            <li>Server-side validation and request size limits.</li>
            <li>Content escaping and header-injection controls.</li>
            <li>Request-origin and context validation.</li>
            <li>BotID, honeypot and rate limiting.</li>
            <li>CSP, HSTS and browser protection headers.</li>
            <li>No-store contact API responses.</li>
            <li>Automated dependency audit, lint and build checks in CI.</li>
            <li>Error logging designed not to expose full personal-data payloads.</li>
          </ul>

          <h2>5. Contact Form</h2>
          <p>The form validates input, separates required processing consent from optional marketing consent, applies abuse controls and does not return a false success in production when the email provider is unavailable.</p>

          <h2>6. Browser and Transport Security</h2>
          <p>The site uses HTTPS and controls including Content-Security-Policy, Strict-Transport-Security, anti-framing protections, Referrer-Policy, Permissions-Policy and cross-origin isolation headers.</p>

          <h2>7. Dependencies and Deployment</h2>
          <p>Changes pass through automated dependency installation, production vulnerability audit, lint and build checks before being considered valid.</p>

          <h2>8. Cybersecurity and AEGRIX 360</h2>
          <p>Assessment, readiness and assurance services are limited to the contracted scope. NIST, ISO/IEC 27001/27002, HIPAA Security Rule and GDPR may be used when relevant without presenting an assessment as certification or an absolute compliance guarantee.</p>

          <h2>9. Access Management</h2>
          <p>Client-system access should follow least privilege, exist only as long as necessary and be revoked or rotated when work ends where applicable.</p>

          <h2>10. Providers</h2>
          <p>The site relies on providers such as Vercel and Resend and may use Google Analytics after consent. AEGRIX manages its own configurations and minimizes shared information while providers remain responsible for their infrastructure.</p>

          <h2>11. Incidents</h2>
          <p>Relevant incidents are evaluated according to impact, affected information and applicable contractual or legal duties.</p>

          <h2>12. Responsible Vulnerability Disclosure</h2>
          <p>Security issues may be reported to <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a> with subject <strong>{legalIdentity.securitySubject}</strong>. Reports should include the affected URL or asset, description, minimal reproduction steps, estimated impact and non-sensitive technical evidence.</p>

          <h2>13. Responsible Research Rules</h2>
          <ul>
            <li>Do not access, download, modify or disclose third-party data.</li>
            <li>No denial of service, spam, social engineering, malware or destructive testing.</li>
            <li>Do not persist access or escalate privileges beyond what is minimally required to document the issue.</li>
            <li>Stop testing if personal/confidential information or availability risk appears.</li>
            <li>Do not publish details before allowing a reasonable review and remediation opportunity.</li>
          </ul>

          <h2>14. Authorization Scope</h2>
          <p>This policy is not a general penetration-testing authorization. Only minimal, non-destructive, good-faith validation of a potential finding on public AEGRIX-managed assets is permitted. Deeper testing requires prior written authorization.</p>

          <h2>15. Privacy</h2>
          <p>Security reports are used to analyze and remediate findings. Please avoid including credentials, client data or unnecessary personal information.</p>

          <h2>16. Continuity</h2>
          <p>Backup, recovery and availability obligations for client projects are defined by contract. The corporate website does not claim absolute availability.</p>

          <h2>17. Updates</h2>
          <p>This policy may be updated as architecture, providers, controls or applicable obligations change.</p>
        </>
      )}
    </LegalPageLayout>
  );
}
