export const runtime = 'edge';

import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';
import { legalIdentity, legalRetention } from '@/lib/legal-identity';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { privacy } = dict.legal;
  const lastUpdated = lang === 'es' ? '3 de septiembre de 2026' : 'September 3, 2026';

  return (
    <LegalPageLayout title={privacy.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>Esta Política de Privacidad y Tratamiento de Datos Personales explica cómo AEGRIX recolecta, usa, conserva, protege y, cuando corresponde, transmite datos personales. Se aplica al sitio web, formularios, correo, WhatsApp, procesos comerciales, diagnósticos y servicios contratados.</p>
          <p>La política se adopta conforme a la Ley 1581 de 2012, sus normas reglamentarias compiladas y demás disposiciones colombianas aplicables.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Responsable del tratamiento</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong><br />
            {legalIdentity.roleEs}<br />
            Marca comercial: <strong>{legalIdentity.brand}</strong><br />
            {legalIdentity.taxIdLabelEs}: <strong>{legalIdentity.taxId}</strong><br />
            Dirección de notificaciones: {legalIdentity.addressEs}<br />
            Correo: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a><br />
            Sitio web: <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>
          </p>

          <h2>2. Canal formal para datos personales y PQR</h2>
          <p>Las consultas, reclamos, solicitudes de actualización, corrección, supresión o revocatoria de autorización pueden enviarse a <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>. Para facilitar su identificación, se recomienda usar el asunto <strong>{legalIdentity.dataSubject}</strong> para asuntos de datos personales o <strong>{legalIdentity.pqrSubject}</strong> para peticiones, quejas o reclamos generales.</p>
          <p>La solicitud debe incluir nombre del titular o representante, medio de contacto, descripción clara de lo solicitado y la información necesaria para validar identidad y legitimación cuando corresponda.</p>

          <h2>3. Datos que podemos tratar</h2>
          <p>Podemos tratar datos de identificación y contacto, empresa y cargo, comunicaciones comerciales, solicitudes técnicas, información contractual y de facturación, registros de consentimiento, datos técnicos básicos del uso del sitio y, cuando un servicio lo requiera, información técnica de sistemas del cliente.</p>
          <p>No solicitamos contraseñas, historias clínicas ni otros datos sensibles a través del formulario público. Si un proyecto exige tratar información sensible o regulada, el alcance, las medidas y las responsabilidades se definirán específicamente.</p>

          <h2>4. Finalidades</h2>
          <ul>
            <li>Responder solicitudes, diagnósticos, propuestas y comunicaciones.</li>
            <li>Gestionar relaciones comerciales y contractuales.</li>
            <li>Prestar servicios de software, ciberseguridad, datos, IA, automatización y AEGRIX 360.</li>
            <li>Gestionar facturación, soporte, PQR y cumplimiento de obligaciones legales.</li>
            <li>Proteger el sitio y los canales frente a abuso, fraude o incidentes.</li>
            <li>Realizar analítica del sitio únicamente cuando el usuario autoriza la categoría de analítica.</li>
            <li>Enviar comunicaciones comerciales únicamente cuando exista autorización aplicable.</li>
          </ul>

          <h2>5. Autorización y prueba</h2>
          <p>Cuando la ley exige autorización, AEGRIX la obtiene por medios que permitan conservar evidencia razonable de la decisión del titular. El consentimiento necesario para responder una solicitud se separa del consentimiento opcional para comunicaciones comerciales.</p>

          <h2>6. Derechos del titular</h2>
          <p>El titular puede conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización; ser informado sobre el uso; acceder gratuitamente a sus datos; presentar quejas ante la Superintendencia de Industria y Comercio; y solicitar revocatoria o supresión cuando proceda legalmente.</p>

          <h2>7. Consultas</h2>
          <p>Las consultas serán atendidas en un término máximo de diez (10) días hábiles desde su recibo. Si no es posible responder dentro de ese plazo, se informarán los motivos y la nueva fecha, que no podrá exceder cinco (5) días hábiles adicionales.</p>

          <h2>8. Reclamos, corrección, supresión y revocatoria</h2>
          <p>Los reclamos completos serán atendidos en un máximo de quince (15) días hábiles contados a partir del día siguiente a su recepción. Si no es posible resolverlos dentro de ese plazo, se informarán los motivos y la nueva fecha, que no podrá exceder ocho (8) días hábiles adicionales.</p>
          <p>Si el reclamo está incompleto, se podrá solicitar su subsanación dentro de los cinco (5) días hábiles siguientes. Si transcurren dos (2) meses sin recibir la información requerida, se podrá entender desistido. La supresión o revocatoria no procede cuando exista un deber legal o contractual de conservar la información.</p>

          <h2>9. Seguridad de la información</h2>
          <p>AEGRIX aplica medidas técnicas y organizacionales proporcionales al riesgo, incluyendo controles de acceso, validación server-side, medidas antiabuso, gestión de dependencias, cifrado en tránsito, registro limitado de errores y principios de mínimo privilegio. Ningún sistema es infalible, por lo que las medidas se revisan y mejoran de forma continua.</p>

          <h2>10. Proveedores y encargados tecnológicos</h2>
          <p>Para operar el sitio actualmente podemos utilizar los siguientes proveedores:</p>
          <ul>
            <li><strong>Vercel:</strong> hosting, infraestructura web y funciones de seguridad/antiabuso.</li>
            <li><strong>Resend:</strong> envío de mensajes generados por el formulario de contacto.</li>
            <li><strong>Google Analytics:</strong> analítica del sitio, únicamente después del consentimiento de analítica.</li>
          </ul>
          <p>Cuando el usuario decide comunicarse mediante servicios externos como WhatsApp, el tratamiento adicional realizado por ese proveedor se rige también por sus propias políticas.</p>

          <h2>11. Transmisiones y tratamiento internacional</h2>
          <p>Los proveedores tecnológicos anteriores pueden procesar información en infraestructura ubicada fuera de Colombia. AEGRIX limita la información compartida a lo necesario para cada finalidad y utiliza servicios sujetos a sus términos, medidas de seguridad y mecanismos contractuales aplicables. Cuando una operación constituya transferencia o transmisión internacional sometida a requisitos adicionales, se aplicarán las reglas colombianas correspondientes.</p>

          <h2>12. Conservación y supresión</h2>
          <ul>
            <li><strong>Prospectos y solicitudes sin relación contractual:</strong> hasta {legalRetention.prospectMonths} meses desde la última interacción relevante, salvo solicitud previa de supresión o necesidad legal demostrable.</li>
            <li><strong>Comunicaciones comerciales:</strong> hasta la revocatoria de la autorización o, como política de depuración, {legalRetention.marketingInactivityMonths} meses de inactividad sin una relación comercial vigente.</li>
            <li><strong>Registros técnicos de seguridad del sitio:</strong> hasta {legalRetention.securityLogMonths} meses, salvo que deban conservarse por investigación de un incidente o requerimiento legal.</li>
            <li><strong>Contratos, facturación, soportes contables y documentación comercial sujeta a deber de conservación:</strong> hasta {legalRetention.commercialRecordsYears} años o el término superior que resulte obligatorio.</li>
          </ul>
          <p>Cumplida la finalidad y vencidos los términos aplicables, los datos serán eliminados, anonimizados o bloqueados cuando corresponda.</p>

          <h2>13. Cookies, almacenamiento local y analítica</h2>
          <p>Las cookies estrictamente necesarias pueden utilizarse para operación y seguridad. Las categorías de analítica, funcionales o marketing no se activan por el simple hecho de navegar: dependen de la elección del usuario en el panel de preferencias. La Política de Cookies explica estas categorías con mayor detalle.</p>

          <h2>14. Servicios de ciberseguridad y AEGRIX 360</h2>
          <p>En proyectos contratados, AEGRIX puede recibir evidencia, información técnica, configuraciones, hallazgos o documentación del cliente. Esa información se tratará conforme al alcance, los controles de acceso acordados, las obligaciones de confidencialidad y, cuando sea aplicable, acuerdos específicos de tratamiento o transmisión.</p>

          <h2>15. Menores de edad</h2>
          <p>Los servicios corporativos de AEGRIX no están dirigidos a menores. Si excepcionalmente un proyecto requiere tratar datos de niños, niñas o adolescentes, se aplicarán las reglas especiales y autorizaciones exigidas por la ley.</p>

          <h2>16. Cambios a esta política</h2>
          <p>Las modificaciones materiales se publicarán en esta página indicando la fecha de actualización. Cuando una modificación requiera una nueva autorización, se solicitará antes de aplicar la nueva finalidad.</p>

          <h2>17. Contacto</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEs}<br />
            {legalIdentity.taxIdLabelEs}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEs}<br />
            <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>
        </>
      ) : (
        <>
          <p>This Privacy and Personal Data Processing Policy explains how AEGRIX collects, uses, retains, protects and, where applicable, transmits personal data in connection with the website, contact channels, commercial processes and contracted services.</p>
          <p>It is governed by Colombian personal data protection law, including Law 1581 of 2012 and applicable regulations.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Data Controller</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong><br />
            {legalIdentity.roleEn}<br />
            Commercial brand: <strong>{legalIdentity.brand}</strong><br />
            {legalIdentity.taxIdLabelEn}: <strong>{legalIdentity.taxId}</strong><br />
            Notice address: {legalIdentity.addressEn}<br />
            Email: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a><br />
            Website: <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>
          </p>

          <h2>2. Formal Privacy and Complaint Channel</h2>
          <p>Data subject requests and general complaints may be sent to <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>. We recommend using <strong>{legalIdentity.dataSubject}</strong> for privacy matters and <strong>{legalIdentity.pqrSubject}</strong> for general complaints.</p>

          <h2>3. Data We May Process</h2>
          <p>We may process identification and contact data, company and role information, commercial communications, technical requests, contractual and billing records, consent evidence, basic website technical data, and technical information supplied for contracted services.</p>

          <h2>4. Purposes</h2>
          <ul>
            <li>Respond to requests, diagnostics and proposals.</li>
            <li>Manage commercial and contractual relationships.</li>
            <li>Deliver software, cybersecurity, data, AI, automation and AEGRIX 360 services.</li>
            <li>Manage billing, support, complaints and legal obligations.</li>
            <li>Protect the website and channels from abuse or incidents.</li>
            <li>Run website analytics only after analytics consent.</li>
            <li>Send marketing communications only where the applicable authorization exists.</li>
          </ul>

          <h2>5. Authorization and Evidence</h2>
          <p>Where authorization is required, AEGRIX obtains it through means that allow reasonable evidence of the data subject&apos;s decision. Necessary request-processing consent is kept separate from optional marketing consent.</p>

          <h2>6. Data Subject Rights</h2>
          <p>Data subjects may know, update and rectify their data, request evidence of authorization, obtain information about use, access their data, submit complaints to the Colombian Superintendence of Industry and Commerce, and request revocation or deletion where legally applicable.</p>

          <h2>7. Queries</h2>
          <p>Queries will be answered within ten (10) business days. If that is not possible, AEGRIX will communicate the reason and the new date, which may not exceed five (5) additional business days.</p>

          <h2>8. Claims, Correction, Deletion and Revocation</h2>
          <p>Complete claims will be answered within fifteen (15) business days starting on the day after receipt. If additional time is required, AEGRIX will communicate the reason and a new date, which may not exceed eight (8) additional business days.</p>
          <p>Deletion or revocation may not apply where a legal or contractual duty requires continued retention.</p>

          <h2>9. Information Security</h2>
          <p>AEGRIX applies risk-based technical and organizational controls, including access controls, server-side validation, abuse protection, dependency management, encrypted transport, limited error logging and least-privilege principles.</p>

          <h2>10. Technology Providers</h2>
          <ul>
            <li><strong>Vercel:</strong> hosting, web infrastructure and security/abuse controls.</li>
            <li><strong>Resend:</strong> delivery of messages generated by the contact form.</li>
            <li><strong>Google Analytics:</strong> website analytics only after analytics consent.</li>
          </ul>

          <h2>11. International Processing</h2>
          <p>These providers may process information outside Colombia. AEGRIX limits disclosures to what is necessary for each purpose and applies Colombian transfer or transmission requirements where applicable.</p>

          <h2>12. Retention</h2>
          <ul>
            <li>Prospects without a contractual relationship: up to {legalRetention.prospectMonths} months after the last relevant interaction.</li>
            <li>Marketing data: until consent is withdrawn or, as a deletion policy, after {legalRetention.marketingInactivityMonths} months of inactivity without an active commercial relationship.</li>
            <li>Website security logs: up to {legalRetention.securityLogMonths} months unless needed for an incident or legal requirement.</li>
            <li>Contracts, billing, accounting and commercial records subject to statutory retention: up to {legalRetention.commercialRecordsYears} years or any longer mandatory period.</li>
          </ul>

          <h2>13. Cookies and Analytics</h2>
          <p>Necessary technologies may support operation and security. Analytics, functional and marketing categories are not activated merely by browsing; they depend on the user&apos;s preferences.</p>

          <h2>14. Cybersecurity and AEGRIX 360 Services</h2>
          <p>Contracted projects may involve technical evidence, configurations, findings or client documentation. Such information is processed according to project scope, access controls and confidentiality obligations.</p>

          <h2>15. Minors</h2>
          <p>AEGRIX corporate services are not directed to minors. Special legal requirements will apply if a project exceptionally involves children&apos;s data.</p>

          <h2>16. Policy Changes</h2>
          <p>Material changes will be published with an updated date. A new authorization will be requested where required for a new processing purpose.</p>

          <h2>17. Contact</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong> · {legalIdentity.roleEn}<br />
            {legalIdentity.taxIdLabelEn}: {legalIdentity.taxId}<br />
            {legalIdentity.addressEn}<br />
            <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a>
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
