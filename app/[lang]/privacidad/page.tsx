import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { privacy } = dict.legal;
  const lastUpdated = lang === 'es' ? '5 de mayo de 2026' : 'May 5, 2026';

  return (
    <LegalPageLayout title={privacy.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>AEGRIX, en adelante “AEGRIX”, comprometida con la protección de la privacidad, la seguridad de la información y el tratamiento responsable de los datos personales, presenta la presente Política de Privacidad y Tratamiento de Datos Personales, en cumplimiento de la legislación colombiana aplicable, especialmente la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas que los modifiquen, complementen o sustituyan.</p>
          <p>Esta política informa a los usuarios, clientes, prospectos, aliados comerciales, visitantes del sitio web y demás titulares de información personal sobre la forma en que AEGRIX recolecta, usa, almacena, protege y, cuando corresponda, comparte sus datos personales.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Responsable del tratamiento</h2>
          <p>El responsable del tratamiento de los datos personales será:</p>
          <p>
            <strong>AEGRIX</strong><br />
            Actividad: servicios de ingeniería de software, desarrollo web, ciberseguridad, analítica de datos, inteligencia artificial, capacitación, consultoría tecnológica y acompañamiento digital.<br />
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Correo electrónico de contacto: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Canal de contacto adicional: WhatsApp empresarial dispuesto en el sitio web.
          </p>

          <h2>2. Datos personales que podemos recolectar</h2>
          <p>AEGRIX podrá recolectar datos personales suministrados directamente por el titular a través del sitio web, formularios de contacto, WhatsApp, correo electrónico, reuniones comerciales, diagnósticos, propuestas, contratos o cualquier otro canal autorizado.</p>
          <p>Los datos podrán incluir, entre otros: Nombre completo, correo electrónico, número de teléfono o WhatsApp, nombre de la empresa, cargo profesional, información sobre necesidades comerciales o técnicas, y datos técnicos básicos derivados del uso del sitio web (IP, navegador, etc.).</p>
          <p>AEGRIX no solicitará datos sensibles salvo que sean estrictamente necesarios para una finalidad legítima e informada.</p>

          <h2>3. Finalidades del tratamiento</h2>
          <p>Los datos personales recolectados podrán ser tratados para:</p>
          <ul>
            <li>Atender solicitudes de información, diagnóstico o asesoría.</li>
            <li>Gestionar comunicaciones comerciales y técnicas con clientes y aliados.</li>
            <li>Elaborar propuestas de servicios y ejecutar obligaciones contractuales.</li>
            <li>Enviar información sobre servicios, novedades y actualizaciones de interés.</li>
            <li>Realizar análisis internos, estadísticas y optimización de servicios.</li>
            <li>Cumplir obligaciones legales y proteger la seguridad de la infraestructura tecnológica.</li>
          </ul>

          <h2>4. Autorización para el tratamiento</h2>
          <p>Al suministrar sus datos, el titular declara que ha leído esta Política y autoriza a AEGRIX a tratar sus datos conforme a las finalidades descritas. AEGRIX solicitará autorización previa y expresa cuando la ley lo exija.</p>

          <h2>5. Derechos de los titulares</h2>
          <p>Los titulares tienen derecho a conocer, actualizar y rectificar sus datos personales, solicitar prueba de la autorización, ser informados sobre el uso de sus datos, presentar quejas ante la SIC y revocar la autorización o solicitar la supresión del dato cuando proceda.</p>

          <h2>6. Procedimiento para consultas, reclamos y solicitudes</h2>
          <p>El titular podrá ejercer sus derechos enviando una comunicación escrita a <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a> incluyendo su nombre, medio de contacto y descripción clara de su solicitud.</p>

          <h2>7. Seguridad de la información</h2>
          <p>AEGRIX adopta medidas técnicas y organizacionales para proteger los datos. El titular reconoce que ningún sistema es infalible, pero AEGRIX se compromete a implementar medidas proporcionales para reducir riesgos.</p>

          <h2>8. Tratamiento en servicios de ciberseguridad, software, datos e IA</h2>
          <p>En servicios especializados, AEGRIX podrá acceder a información técnica del cliente, la cual será tratada bajo estrictos criterios de confidencialidad y únicamente para la prestación del servicio solicitado.</p>

          <h2>9. Uso de herramientas tecnológicas y analítica</h2>
          <p>AEGRIX podrá utilizar herramientas de terceros (IA, CRM, hosting, etc.) para mejorar servicios. Procurará que dichos proveedores cumplan con estándares de seguridad y no ingresará datos sensibles en herramientas de IA sin control.</p>

          <h2>10. Transferencia y transmisión de datos personales</h2>
          <p>AEGRIX podrá compartir datos con terceros (hosting, asesores, aliados) únicamente para cumplir finalidades autorizadas o deberes legales, bajo medidas contractuales de protección.</p>

          <h2>11. Conservación de los datos</h2>
          <p>Los datos serán conservados durante el tiempo necesario para cumplir las finalidades, obligaciones legales o contractuales. Posteriormente, podrán ser eliminados o anonimizados.</p>

          <h2>12. Cookies y tecnologías similares</h2>
          <p>El sitio web utiliza cookies para mejorar la experiencia y analizar el rendimiento. El usuario puede configurarlas desde su navegador, aunque esto podría afectar funcionalidades del sitio.</p>

          <h2>13. Enlaces a sitios de terceros</h2>
          <p>AEGRIX no se hace responsable por las prácticas de privacidad o contenidos de sitios web externos enlazados desde nuestra plataforma.</p>

          <h2>14. Datos de menores de edad</h2>
          <p>AEGRIX no dirige servicios a menores de edad ni recolecta intencionalmente sus datos. Si se requiere tratamiento, se hará bajo autorización del representante legal.</p>

          <h2>15. Confidencialidad empresarial</h2>
          <p>Toda información técnica o estratégica compartida será tratada con reserva y utilizada exclusivamente para los fines del proyecto o servicio solicitado.</p>

          <h2>16. Limitación de responsabilidad</h2>
          <p>AEGRIX no responde por eventos de fuerza mayor o acciones de terceros si ha cumplido con sus obligaciones de seguridad y normativa aplicable.</p>

          <h2>17. Modificaciones a la política</h2>
          <p>AEGRIX podrá modificar esta política en cualquier momento publicándola en el sitio web para adaptarla a cambios legales o técnicos.</p>

          <h2>18. Contacto</h2>
          <p>
            <strong>Correo electrónico:</strong> <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            <strong>Sitio web:</strong> <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      ) : (
        <>
          <p>AEGRIX, hereinafter “AEGRIX”, committed to privacy protection, information security, and responsible personal data treatment, presents this Privacy Policy in compliance with Colombian legislation, especially Law 1581 of 2012 and Decree 1377 of 2013.</p>
          <p>This policy informs users, clients, prospects, and visitors about how AEGRIX collects, uses, stores, protects, and shares personal data.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Data Controller</h2>
          <p>The entity responsible for personal data treatment is:</p>
          <p>
            <strong>AEGRIX</strong><br />
            Activity: software engineering, web development, cybersecurity, data analytics, AI, training, and digital consulting services.<br />
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Contact Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a>
          </p>

          <h2>2. Personal Data We May Collect</h2>
          <p>AEGRIX collects data provided directly through the website, forms, WhatsApp, or meetings. This includes full names, emails, phone numbers, company names, professional roles, and technical usage data (IP, browser, etc.).</p>

          <h2>3. Purposes of Treatment</h2>
          <p>Data is treated to: respond to information requests, manage commercial communications, prepare proposals, execute contracted services, improve user experience, and comply with legal obligations.</p>

          <h2>4. Authorization</h2>
          <p>By providing data, the holder authorizes treatment according to this policy. AEGRIX will request express authorization when required by law.</p>

          <h2>5. Holder Rights</h2>
          <p>Holders have the right to know, update, and rectify data, request proof of authorization, be informed of use, and request data suppression when applicable.</p>

          <h2>6. Procedures</h2>
          <p>Rights can be exercised by writing to <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a> with clear details of the request.</p>

          <h2>7. Information Security</h2>
          <p>AEGRIX implements technical and organizational measures to protect data. While no system is infallible, we are committed to reducing risks through proportional measures.</p>

          <h2>8. Cybersecurity, Software, Data & AI Services</h2>
          <p>In specialized services, AEGRIX may access technical client information, treated under strict confidentiality for service delivery only.</p>

          <h2>9. Third-Party Tools & AI</h2>
          <p>AEGRIX may use third-party tools (Hosting, CRM, AI) for service improvement, ensuring providers meet security standards.</p>

          <h2>10. Data Transfer</h2>
          <p>Data may be shared with providers or allies only to fulfill authorized purposes or legal duties, under contractual protection.</p>

          <h2>11. Data Conservation</h2>
          <p>Data is kept for as long as necessary for purposes, legal, or contractual obligations, then deleted or anonymized.</p>

          <h2>12. Cookies</h2>
          <p>The website uses cookies to improve performance and experience. Users can manage them through browser settings.</p>

          <h2>13. Third-Party Links</h2>
          <p>AEGRIX is not responsible for the privacy practices or content of external websites linked from our platform.</p>

          <h2>14. Minors&apos; Data</h2>
          <p>AEGRIX does not target minors. Any treatment will require legal representative authorization.</p>

          <h2>15. Business Confidentiality</h2>
          <p>Strategic information shared will be treated as confidential and used exclusively for the requested project or service.</p>

          <h2>16. Limitation of Liability</h2>
          <p>AEGRIX is not responsible for force majeure or third-party actions if security obligations and regulations have been met.</p>

          <h2>17. Policy Modifications</h2>
          <p>AEGRIX may update this policy at any time by publishing it on the website.</p>

          <h2>18. Contact</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            <strong>Website:</strong> <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
