export const runtime = 'edge';

import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';
import { legalIdentity } from '@/lib/legal-identity';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { terms } = dict.legal;
  const lastUpdated = lang === 'es' ? '3 de septiembre de 2026' : 'September 3, 2026';

  return (
    <LegalPageLayout title={terms.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>Estos Términos y Condiciones regulan el uso del sitio web de AEGRIX y establecen reglas generales para solicitudes comerciales y servicios. Las condiciones específicas de cada proyecto se definen en la propuesta, orden de servicio o contrato aplicable y prevalecen sobre cualquier descripción general del sitio.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Identificación</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong><br />
            {legalIdentity.roleEs}<br />
            Marca comercial: <strong>{legalIdentity.brand}</strong><br />
            {legalIdentity.taxIdLabelEs}: <strong>{legalIdentity.taxId}</strong><br />
            Dirección de notificaciones: {legalIdentity.addressEs}<br />
            Correo: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a><br />
            Sitio web: <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>
          </p>

          <h2>2. Naturaleza del sitio</h2>
          <p>El sitio tiene fines informativos, comerciales y de contacto. La información pública no sustituye una propuesta, contrato, auditoría, diagnóstico formal, asesoría jurídica ni certificación.</p>

          <h2>3. Servicios</h2>
          <p>AEGRIX presta servicios de ingeniería de software, desarrollo web, ciberseguridad, datos, automatización, inteligencia artificial, consultoría tecnológica y AEGRIX 360. El alcance, entregables, exclusiones, responsables, cronograma, criterios de aceptación y precio se definen por proyecto.</p>

          <h2>4. AEGRIX 360, marcos y certificaciones</h2>
          <p>AEGRIX 360 puede utilizar marcos como NIST CSF 2.0, ISO/IEC 27001, ISO/IEC 27002, HIPAA Security Rule y GDPR en procesos de assessment, readiness y assurance según el alcance contratado. Salvo indicación expresa y jurídicamente válida, AEGRIX no actúa como organismo certificador y una evaluación no constituye por sí sola certificación ni garantía de cumplimiento legal.</p>

          <h2>5. Información y colaboración del cliente</h2>
          <p>El cliente debe suministrar información, accesos y decisiones necesarios de forma oportuna y contar con autorización para compartirlos. Los resultados pueden depender de la calidad, integridad y oportunidad de esa información.</p>

          <h2>6. Seguridad y diagnósticos</h2>
          <p>Ningún servicio de ciberseguridad elimina todos los riesgos ni garantiza protección absoluta. Los hallazgos representan el estado observado dentro del alcance y momento de la evaluación. La implementación de remediaciones y controles posteriores puede ser responsabilidad de AEGRIX, del cliente o de terceros según el contrato.</p>

          <h2>7. Software, integraciones e infraestructura</h2>
          <p>AEGRIX responde por el alcance contratado y por las correcciones atribuibles a sus entregables conforme al proceso de aceptación acordado. Fallas de proveedores, APIs, plataformas o infraestructura de terceros se gestionarán de acuerdo con la responsabilidad real y los compromisos asumidos en cada proyecto.</p>

          <h2>8. IA, automatización y datos</h2>
          <p>Las soluciones de IA y automatización dependen de datos, configuraciones, modelos y servicios de terceros. Cuando una decisión sea crítica o regulada, el cliente debe mantener controles humanos y profesionales adecuados.</p>

          <h2>9. SEO, analítica y resultados comerciales</h2>
          <p>AEGRIX puede diseñar e implementar SEO técnico, analítica y optimización de conversión, pero no garantiza posiciones específicas en buscadores, ventas mínimas, tráfico determinado ni resultados que dependan de algoritmos, mercado, presupuesto o decisiones de terceros.</p>

          <h2>10. Cotizaciones, impuestos y facturación</h2>
          <p>Las propuestas tendrán la vigencia indicada y especificarán, cuando corresponda, impuestos, anticipos, hitos, moneda, forma de pago y condiciones de facturación. Ninguna descripción pública sustituye esas condiciones comerciales.</p>

          <h2>11. Pagos y mora</h2>
          <p>El cliente debe pagar conforme al calendario acordado. Ante mora o incumplimiento material, AEGRIX podrá suspender actividades después de informar al cliente, sin eliminar las obligaciones ya causadas ni los derechos que la ley otorgue al consumidor cuando resulten aplicables.</p>

          <h2>12. Retracto, cancelaciones y reembolsos</h2>
          <p>Cuando una relación esté sujeta al Estatuto del Consumidor y el derecho de retracto resulte aplicable a una contratación a distancia, se respetarán los términos y excepciones previstos por la legislación colombiana. En servicios cuya ejecución haya comenzado con acuerdo del consumidor, la excepción legal al retracto podrá aplicar.</p>
          <p>Fuera de los casos de retracto u otros derechos obligatorios, las cancelaciones, terminaciones y reembolsos se regirán por la propuesta o contrato y por el trabajo efectivamente ejecutado, costos comprometidos y entregables producidos. No se aplicará una regla absoluta de “no reembolso” cuando una norma imperativa disponga lo contrario.</p>

          <h2>13. Reversión de pagos</h2>
          <p>Cuando la operación y el medio de pago estén comprendidos por las reglas colombianas de reversión de pagos electrónicos, AEGRIX atenderá las solicitudes que legalmente procedan. Este sitio actualmente funciona principalmente como canal informativo y comercial; las condiciones de pago de cada servicio se definen en la contratación correspondiente.</p>

          <h2>14. Tiempos y dependencias</h2>
          <p>Los cronogramas se fijan en cada proyecto y pueden ajustarse por cambios de alcance, demoras del cliente, disponibilidad de terceros, incidentes o eventos fuera del control razonable de AEGRIX. Los cambios materiales serán comunicados.</p>

          <h2>15. Cambios de alcance</h2>
          <p>Todo trabajo adicional que modifique el alcance, entregables o dependencias podrá requerir una aprobación de cambio, ajuste de precio y actualización del cronograma antes de ejecutarse.</p>

          <h2>16. Garantías, correcciones y aceptación</h2>
          <p>Los criterios de aceptación y periodos de corrección se definirán en cada propuesta o contrato. AEGRIX corregirá defectos atribuibles a sus entregables dentro del alcance acordado. No se consideran defectos los cambios de preferencia, nuevas funcionalidades, fallas de terceros o modificaciones realizadas sin autorización por personas ajenas al proyecto.</p>

          <h2>17. Propiedad intelectual</h2>
          <p>La marca, contenidos y elementos propios del sitio pertenecen a sus respectivos titulares y no pueden reproducirse sin autorización. En proyectos, la titularidad de código, diseños, documentación, licencias, componentes preexistentes y desarrollos específicos se determinará en el contrato aplicable.</p>

          <h2>18. Portafolio y referencias de clientes</h2>
          <p>AEGRIX no publicará información confidencial, logos, capturas, resultados o referencias identificables de un cliente sin autorización o una base contractual que lo permita. El uso de un proyecto en portafolio debe respetar los compromisos de confidencialidad y propiedad intelectual aplicables.</p>

          <h2>19. Confidencialidad</h2>
          <p>La información técnica, estratégica, comercial o de seguridad no pública recibida durante una relación será tratada con reserva y utilizada para las finalidades del proyecto, salvo autorización, obligación legal o requerimiento de autoridad competente.</p>

          <h2>20. Protección de datos</h2>
          <p>El tratamiento de datos personales se rige por la Política de Privacidad publicada en este sitio. El cliente debe informar a AEGRIX cuando un proyecto implique categorías especiales, datos sensibles, información de salud u obligaciones regulatorias específicas.</p>

          <h2>21. Servicios y plataformas de terceros</h2>
          <p>Un proyecto puede depender de servicios externos. AEGRIX seleccionará e integrará proveedores según el alcance, pero no controla de forma absoluta la disponibilidad, decisiones, cambios de precio o incidentes propios de terceros.</p>

          <h2>22. Limitación de responsabilidad</h2>
          <p>Las limitaciones de responsabilidad se interpretarán conforme a la ley y al contrato aplicable. Ninguna cláusula de estos términos pretende excluir responsabilidades que legalmente no puedan excluirse ni limitar derechos obligatorios de consumidores.</p>

          <h2>23. Fuerza mayor y caso fortuito</h2>
          <p>Ninguna parte será responsable por incumplimientos causados por eventos imprevisibles o irresistibles fuera de su control razonable, sin perjuicio de los deberes de información, mitigación y continuidad que hayan sido expresamente contratados.</p>

          <h2>24. Terminación</h2>
          <p>Las causas, efectos, pagos pendientes, entrega de activos, revocación de accesos y transición al terminar un servicio se regirán por el contrato. AEGRIX podrá suspender o terminar por incumplimientos graves, uso ilícito, riesgo de seguridad o mora, respetando obligaciones legales y contractuales.</p>

          <h2>25. PQR y contacto</h2>
          <p>Las peticiones, quejas o reclamos pueden enviarse a <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a> con el asunto <strong>{legalIdentity.pqrSubject}</strong> o a la dirección {legalIdentity.addressEs}. AEGRIX dará trámite conforme a la naturaleza de la solicitud y a los términos legales aplicables.</p>

          <h2>26. Autoridad de protección al consumidor</h2>
          <p>Cuando la relación esté sujeta al régimen colombiano de protección al consumidor, puede consultarse información de la Superintendencia de Industria y Comercio en <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" className="text-aegrix-cyan">www.sic.gov.co</a>.</p>

          <h2>27. Ley aplicable y controversias</h2>
          <p>Estos términos se rigen por la legislación de la República de Colombia. Las partes procurarán resolver primero las diferencias mediante comunicación directa, sin impedir el acceso a autoridades, mecanismos de protección al consumidor o jurisdicciones competentes cuando proceda.</p>

          <h2>28. Modificaciones</h2>
          <p>AEGRIX puede actualizar estos términos para reflejar cambios legales, operativos o de servicios. Los cambios no alterarán retroactivamente condiciones contractuales ya pactadas salvo acuerdo o norma obligatoria.</p>
        </>
      ) : (
        <>
          <p>These Terms govern use of the AEGRIX website and establish general rules for commercial requests and services. Project-specific proposals, statements of work and contracts define the binding scope and prevail over general website descriptions.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Identification</h2>
          <p>
            <strong>{legalIdentity.responsibleName}</strong><br />
            {legalIdentity.roleEn}<br />
            Commercial brand: <strong>{legalIdentity.brand}</strong><br />
            {legalIdentity.taxIdLabelEn}: <strong>{legalIdentity.taxId}</strong><br />
            Notice address: {legalIdentity.addressEn}<br />
            Email: <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a><br />
            Website: <a href={legalIdentity.website} className="text-aegrix-cyan">{legalIdentity.website}</a>
          </p>

          <h2>2. Website Purpose</h2>
          <p>The website is informational and commercial. Public content is not a substitute for a formal proposal, contract, security assessment, legal advice or certification.</p>

          <h2>3. Services</h2>
          <p>AEGRIX provides software engineering, web development, cybersecurity, data, automation, AI, technology consulting and AEGRIX 360 services. Scope, deliverables, exclusions, schedule, acceptance criteria and pricing are defined per project.</p>

          <h2>4. AEGRIX 360 and Frameworks</h2>
          <p>AEGRIX 360 may use NIST CSF 2.0, ISO/IEC 27001, ISO/IEC 27002, HIPAA Security Rule and GDPR for assessment, readiness and assurance within the contracted scope. AEGRIX does not act as a certification body unless expressly and lawfully stated, and an assessment alone is not a certification or legal compliance guarantee.</p>

          <h2>5. Client Information</h2>
          <p>Clients must provide timely, accurate information and authorized access. Results may depend on the quality and completeness of that information.</p>

          <h2>6. Security Assessments</h2>
          <p>No cybersecurity service eliminates all risk. Findings represent the observed state within the agreed scope and time of assessment.</p>

          <h2>7. Software and Infrastructure</h2>
          <p>AEGRIX is responsible for its contracted deliverables and agreed correction process. Third-party failures are handled according to the actual responsibility and project terms.</p>

          <h2>8. AI, Automation and Data</h2>
          <p>AI and automation depend on data, models, configuration and third parties. Appropriate human controls must remain in place for critical or regulated decisions.</p>

          <h2>9. SEO and Commercial Results</h2>
          <p>AEGRIX may implement SEO, analytics and conversion work but does not guarantee specific rankings, traffic or sales outcomes dependent on external factors.</p>

          <h2>10. Quotes, Taxes and Billing</h2>
          <p>Proposals define validity, taxes, advances, milestones, currency, payment method and invoicing conditions where applicable.</p>

          <h2>11. Payments</h2>
          <p>Clients must pay according to the agreed schedule. Material non-payment may result in suspension after notice, without limiting mandatory consumer rights where applicable.</p>

          <h2>12. Withdrawal, Cancellation and Refunds</h2>
          <p>Where Colombian consumer law grants a right of withdrawal for a distance contract, AEGRIX will honor the applicable statutory terms and exceptions. Services that have begun with the consumer&apos;s agreement may fall within a statutory exception.</p>
          <p>Outside mandatory rights, cancellation and refunds are governed by the applicable proposal or contract, work performed, committed costs and delivered work.</p>

          <h2>13. Payment Reversal</h2>
          <p>Where Colombian electronic-payment reversal rules apply to the transaction and payment method, AEGRIX will process legally valid requests.</p>

          <h2>14. Schedule and Dependencies</h2>
          <p>Project schedules may change due to scope changes, client delays, third-party availability, incidents or events outside reasonable control.</p>

          <h2>15. Scope Changes</h2>
          <p>Additional work may require an approved change request, pricing adjustment and updated schedule.</p>

          <h2>16. Warranties, Corrections and Acceptance</h2>
          <p>Acceptance and correction periods are defined in project terms. AEGRIX will correct defects attributable to its deliverables within the agreed scope.</p>

          <h2>17. Intellectual Property</h2>
          <p>Website content and brand assets may not be reproduced without authorization. Project ownership, licenses, pre-existing components and custom developments are governed by contract.</p>

          <h2>18. Portfolio Use</h2>
          <p>AEGRIX will not publish confidential client information, logos, screenshots, results or identifiable references without authorization or an applicable contractual basis.</p>

          <h2>19. Confidentiality</h2>
          <p>Non-public technical, strategic, commercial and security information is treated as confidential and used for the project unless disclosure is authorized or legally required.</p>

          <h2>20. Personal Data</h2>
          <p>Personal data processing is governed by the Privacy Policy. Clients must identify projects involving sensitive, health or specially regulated information.</p>

          <h2>21. Third-Party Services</h2>
          <p>Projects may depend on external services. AEGRIX does not fully control third-party availability, pricing changes or incidents.</p>

          <h2>22. Liability</h2>
          <p>Liability provisions are interpreted according to applicable law and contract. Nothing in these Terms excludes liability or mandatory consumer rights that cannot legally be excluded.</p>

          <h2>23. Force Majeure</h2>
          <p>Neither party is liable for failures caused by events outside reasonable control, subject to any expressly contracted continuity obligations.</p>

          <h2>24. Termination</h2>
          <p>Termination, pending payments, asset delivery, access revocation and transition are governed by the applicable contract and mandatory law.</p>

          <h2>25. Complaints and Contact</h2>
          <p>Complaints may be sent to <a href={`mailto:${legalIdentity.email}`} className="text-aegrix-cyan">{legalIdentity.email}</a> using subject <strong>{legalIdentity.pqrSubject}</strong> or to {legalIdentity.addressEn}.</p>

          <h2>26. Colombian Consumer Authority</h2>
          <p>Where Colombian consumer law applies, information from the Superintendence of Industry and Commerce is available at <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" className="text-aegrix-cyan">www.sic.gov.co</a>.</p>

          <h2>27. Applicable Law and Disputes</h2>
          <p>These Terms are governed by Colombian law. The parties will first seek direct resolution without limiting access to competent authorities or mandatory consumer remedies.</p>

          <h2>28. Changes</h2>
          <p>AEGRIX may update these Terms for legal, operational or service changes. Existing project contracts are not retroactively altered without agreement or mandatory law.</p>
        </>
      )}
    </LegalPageLayout>
  );
}
