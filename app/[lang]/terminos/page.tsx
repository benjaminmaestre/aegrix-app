export const runtime = 'edge';

import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { terms } = dict.legal;
  const lastUpdated = lang === 'es' ? '5 de mayo de 2026' : 'May 5, 2026';

  return (
    <LegalPageLayout title={terms.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>Bienvenido a AEGRIX. Al acceder, navegar, utilizar este sitio web, comunicarse con nosotros, solicitar información, contratar servicios, enviar formularios o interactuar con nuestros canales digitales, usted acepta los presentes Términos y Condiciones de Servicio.</p>
          <p>Si no está de acuerdo con estos términos, deberá abstenerse de utilizar este sitio web, enviar información o contratar nuestros servicios.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Identificación de AEGRIX</h2>
          <p>AEGRIX es una marca dedicada a la prestación de servicios de ingeniería de software, desarrollo web, ciberseguridad, analítica de datos, inteligencia artificial, capacitación tecnológica, consultoría digital y acompañamiento estratégico para empresas.</p>
          <p>
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Correo electrónico: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Canal comercial: WhatsApp habilitado en el sitio web.
          </p>

          <h2>2. Aceptación de los términos</h2>
          <p>El acceso y uso del sitio web de AEGRIX implica la aceptación plena, expresa e informada de estos Términos y Condiciones. El usuario declara que cuenta con capacidad legal suficiente para utilizar este sitio y actuar en nombre de una organización cuando corresponda.</p>

          <h2>3. Naturaleza del sitio web</h2>
          <p>El sitio web de AEGRIX tiene fines informativos, comerciales y de contacto. La información publicada no constituye asesoría técnica definitiva ni diagnóstico de seguridad completo, salvo que exista una contratación formal. AEGRIX podrá modificar contenidos sin previo aviso.</p>

          <h2>4. Servicios ofrecidos</h2>
          <p>AEGRIX ofrece servicios de desarrollo de software, desarrollo web, ciberseguridad, diagnósticos tecnológicos, analítica de datos, IA, entre otros. La descripción en el sitio web es general; el alcance específico se definirá en propuestas comerciales o contratos.</p>

          <h2>5. Responsabilidad del usuario</h2>
          <p>El usuario es responsable por la veracidad de la información suministrada. Se obliga a no utilizar el sitio para actividades ilícitas, no intentar acceder sin autorización a sistemas de AEGRIX y no realizar pruebas de seguridad o ataques informáticos.</p>

          <h2>6. Información suministrada por el usuario</h2>
          <p>El usuario declara tener autorización para compartir la información entregada a AEGRIX. AEGRIX no será responsable por resultados incompletos derivados de información falsa, inexacta o insuficiente suministrada por el cliente.</p>

          <h2>7. Diagnósticos, auditorías y análisis preliminares</h2>
          <p>Se basan en la información disponible al momento. Ningún diagnóstico constituye garantía absoluta de seguridad total o eliminación definitiva de riesgos, dado que los entornos digitales cambian constantemente.</p>

          <h2>8. Ciberseguridad y limitación de garantías</h2>
          <p>Ningún servicio de ciberseguridad garantiza protección absoluta. El cliente es responsable de implementar las recomendaciones, actualizaciones y medidas de seguridad sugeridas por AEGRIX.</p>

          <h2>9. Desarrollo web, software e integraciones</h2>
          <p>AEGRIX responde por el alcance expresamente contratado. El cliente es responsable de entregar información y accesos a tiempo. AEGRIX no responde por fallas de proveedores externos (hosting, APIs, etc.).</p>

          <h2>10. Inteligencia artificial, automatización y datos</h2>
          <p>Sujetos a limitaciones técnicas y calidad de datos. AEGRIX no es responsable por decisiones tomadas exclusivamente con base en resultados de IA sin validación humana profesional.</p>

          <h2>11. SEO, marketing y resultados comerciales</h2>
          <p>AEGRIX ejecuta actividades con criterios profesionales, pero no garantiza ventas mínimas, posición exacta en buscadores o tráfico, ya que dependen de algoritmos externos y el mercado.</p>

          <h2>12. Pagos, cotizaciones y condiciones comerciales</h2>
          <p>Las cotizaciones tienen la vigencia indicada. Los pagos por servicios ya iniciados no son reembolsables. Los retrasos en pagos pueden generar suspensión de servicios.</p>

          <h2>13. Tiempos de entrega</h2>
          <p>Son estimados y dependen de la entrega de información por parte del cliente y la respuesta de terceros. AEGRIX no responde por retrasos ajenos a su control razonable.</p>

          <h2>14. Cambios de alcance</h2>
          <p>Cualquier modificación no incluida inicialmente generará costos adicionales y ampliación de tiempos. AEGRIX no está obligada a ejecutar cambios no contratados.</p>

          <h2>15. Propiedad intelectual</h2>
          <p>Todos los contenidos del sitio pertenecen a AEGRIX. Queda prohibida su reproducción sin autorización escrita. En proyectos, la titularidad se rige por lo pactado en el contrato.</p>

          <h2>16. Uso de portafolio</h2>
          <p>Salvo solicitud de confidencialidad escrita, AEGRIX podrá mencionar la relación comercial e incluir referencias visuales no sensibles en su portafolio comercial.</p>

          <h2>17. Confidencialidad</h2>
          <p>Ambas partes se obligan a tratar con reserva la información técnica y comercial intercambiada que no sea de dominio público.</p>

          <h2>18. Protección de datos personales</h2>
          <p>El tratamiento se realiza conforme a la Ley 1581 de 2012 y la Política de Privacidad de AEGRIX disponible en este sitio.</p>

          <h2>19. Enlaces y servicios de terceros</h2>
          <p>AEGRIX no controla ni garantiza el funcionamiento o seguridad de sitios o APIs de terceros enlazados.</p>

          <h2>20. Disponibilidad del sitio web</h2>
          <p>AEGRIX no garantiza funcionamiento ininterrumpido. Podrá suspender el sitio por mantenimiento o seguridad sin previo aviso.</p>

          <h2>21. Prohibiciones especiales</h2>
          <p>Queda prohibido el scraping no autorizado, suplantación de identidad e introducción de malware. AEGRIX iniciará acciones legales ante incumplimientos.</p>

          <h2>22. Limitación de responsabilidad</h2>
          <p>En la medida permitida por la ley, la responsabilidad total de AEGRIX está limitada al valor pagado por el servicio específico que originó la reclamación.</p>

          <h2>23. Indemnidad</h2>
          <p>El usuario mantendrá indemne a AEGRIX ante reclamaciones derivadas de su uso indebido del sitio o incumplimiento de estos términos.</p>

          <h2>24. Fuerza mayor y caso fortuito</h2>
          <p>AEGRIX no responde por incumplimientos causados por eventos fuera de su control (fallas de internet, ataques informáticos externos, desastres, etc.).</p>

          <h2>25. Terminación o suspensión</h2>
          <p>AEGRIX podrá suspender servicios ante incumplimientos de términos o impago, sin perjuicio de las obligaciones pendientes del cliente.</p>

          <h2>26. Comunicaciones</h2>
          <p>Se consideran válidas las comunicaciones por correo o WhatsApp para efectos comerciales y probatorios según el marco de comercio electrónico colombiano.</p>

          <h2>27. Legislación aplicable</h2>
          <p>Estos términos se rigen íntegramente por las leyes de la República de Colombia.</p>

          <h2>28. Resolución de controversias</h2>
          <p>Las diferencias se resolverán primero mediante negociación directa de buena fe antes de acudir a instancias judiciales en Colombia.</p>

          <h2>29. Modificaciones de los términos</h2>
          <p>AEGRIX podrá actualizar estos términos en cualquier momento publicándolos en la web.</p>

          <h2>30. Nulidad parcial</h2>
          <p>Si una cláusula es inválida, las demás conservarán plena validez y efecto.</p>

          <h2>31. Contacto</h2>
          <p>
            Correo electrónico: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      ) : (
        <>
          <p>Welcome to AEGRIX. By accessing, browsing, using this website, communicating with us, requesting information, contracting services, submitting forms, or interacting with our digital channels, you accept these Terms and Conditions of Service.</p>
          <p>If you do not agree with these terms, you must refrain from using this website, submitting information, or contracting our services.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Identification of AEGRIX</h2>
          <p>AEGRIX is a brand dedicated to providing software engineering, web development, cybersecurity, data analytics, artificial intelligence, technological training, digital consulting, and strategic accompaniment for companies.</p>
          <p>
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Commercial channel: WhatsApp enabled on the website.
          </p>

          <h2>2. Acceptance of Terms</h2>
          <p>Access and use of the website imply full acceptance. The user declares sufficient legal capacity to act on behalf of an organization when applicable.</p>

          <h2>3. Nature of the Website</h2>
          <p>The website is for informative and commercial purposes. Published information does not constitute definitive technical advice without formal contracting.</p>

          <h2>4. Services Offered</h2>
          <p>AEGRIX offers software development, cybersecurity, diagnostics, data analytics, and AI. Specific scope is defined in commercial proposals or contracts.</p>

          <h2>5. User Responsibility</h2>
          <p>The user is responsible for the truthfulness of provided information and must not use the site for illegal activities or security breaches.</p>

          <h2>6. Information Provided by the User</h2>
          <p>Users must have authorization to share information. AEGRIX is not responsible for incomplete results due to false or inaccurate data provided by the client.</p>

          <h2>7. Diagnostics, Audits, and Preliminary Analysis</h2>
          <p>Based on available information at the time. No diagnosis constitutes an absolute guarantee of total security or elimination of risks.</p>

          <h2>8. Cybersecurity and Limitation of Warranties</h2>
          <p>No cybersecurity service guarantees absolute protection. Clients are responsible for implementing recommendations and security measures.</p>

          <h2>9. Web Development, Software, and Integrations</h2>
          <p>AEGRIX is responsible for the contracted scope. Clients must deliver information on time. AEGRIX is not responsible for third-party provider failures.</p>

          <h2>10. Artificial Intelligence, Automation, and Data</h2>
          <p>Subject to technical limitations. AEGRIX is not responsible for decisions based solely on AI results without professional human validation.</p>

          <h2>11. SEO, Marketing, and Commercial Results</h2>
          <p>AEGRIX executes activities with professional criteria but does not guarantee specific sales, search rankings, or traffic.</p>

          <h2>12. Payments, Quotes, and Commercial Conditions</h2>
          <p>Quotes have a specific validity. Payments for services already started are non-refundable. Late payments may result in service suspension.</p>

          <h2>13. Delivery Times</h2>
          <p>Estimated times depend on client information and third-party responses. AEGRIX is not responsible for delays outside its control.</p>

          <h2>14. Scope Changes</h2>
          <p>Any modifications not initially included will result in additional costs and time. AEGRIX is not obliged to execute uncontracted changes.</p>

          <h2>15. Intellectual Property</h2>
          <p>All content belongs to AEGRIX. Reproduction without written authorization is prohibited. Project ownership is governed by contract.</p>

          <h2>16. Portfolio Use</h2>
          <p>Unless confidentiality is requested in writing, AEGRIX may mention the commercial relationship and include visual references in its portfolio.</p>

          <h2>17. Confidentiality</h2>
          <p>Both parties agree to treat technical and commercial information exchanged as confidential.</p>

          <h2>18. Personal Data Protection</h2>
          <p>Treatment is performed in accordance with Law 1581 of 2012 and AEGRIX&apos;s Privacy Policy available on this site.</p>

          <h2>19. Third-Party Links and Services</h2>
          <p>AEGRIX does not control or guarantee the functioning or security of linked third-party sites or APIs.</p>

          <h2>20. Website Availability</h2>
          <p>AEGRIX does not guarantee uninterrupted operation and may suspend the site for maintenance or security.</p>

          <h2>21. Special Prohibitions</h2>
          <p>Unauthorized scraping, identity theft, and malware introduction are prohibited. AEGRIX will take legal action against breaches.</p>

          <h2>22. Limitation of Liability</h2>
          <p>To the extent permitted by law, AEGRIX&apos;s total liability is limited to the value paid for the specific service.</p>

          <h2>23. Indemnity</h2>
          <p>Users shall hold AEGRIX harmless from claims derived from improper use or breach of these terms.</p>

          <h2>24. Force Majeure</h2>
          <p>AEGRIX is not responsible for failures caused by events beyond its control (internet failures, external cyberattacks, etc.).</p>

          <h2>25. Termination or Suspension</h2>
          <p>AEGRIX may suspend services for breach of terms or non-payment, without prejudice to pending obligations.</p>

          <h2>26. Communications</h2>
          <p>Email and WhatsApp communications are valid for commercial and evidentiary purposes under Colombian law.</p>

          <h2>27. Applicable Law</h2>
          <p>These terms are governed entirely by the laws of the Republic of Colombia.</p>

          <h2>28. Dispute Resolution</h2>
          <p>Differences will be resolved through direct negotiation before resorting to judicial instances in Colombia.</p>

          <h2>29. Modifications of Terms</h2>
          <p>AEGRIX may update these terms at any time by publishing them on the web.</p>

          <h2>30. Partial Nullity</h2>
          <p>If a clause is invalid, the others will retain full validity and effect.</p>

          <h2>31. Contact</h2>
          <p>
            Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
