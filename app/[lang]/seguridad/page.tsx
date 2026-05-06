import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { security } = dict.legal;
  const lastUpdated = lang === 'es' ? '5 de mayo de 2026' : 'May 5, 2026';

  return (
    <LegalPageLayout title={security.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>En AEGRIX, la seguridad de la información, la protección de los activos digitales, la confidencialidad de los datos y la gestión responsable de los riesgos tecnológicos son principios fundamentales en la prestación de nuestros servicios.</p>
          <p>Esta Política de Seguridad describe los lineamientos generales que AEGRIX adopta para proteger su sitio web, sus canales digitales, la información recibida de usuarios, clientes, prospectos y aliados, así como los entornos tecnológicos relacionados con la prestación de servicios de ingeniería de software, desarrollo web, ciberseguridad, analítica de datos, inteligencia artificial, capacitación y consultoría digital.</p>
          <p>Esta política debe leerse en conjunto con la Política de Privacidad, la Política de Cookies y los Términos y Condiciones de Servicio de AEGRIX.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Alcance</h2>
          <p>Esta Política de Seguridad aplica al sitio web <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>, a los canales digitales oficiales de AEGRIX, a los formularios de contacto, comunicaciones comerciales, procesos de diagnóstico, propuestas, servicios contratados, información técnica suministrada por clientes y cualquier interacción digital relacionada con AEGRIX.</p>

          <h2>2. Principios de seguridad</h2>
          <p>AEGRIX orienta su gestión de seguridad bajo los siguientes principios: Confidencialidad, Integridad, Disponibilidad, Mínimo privilegio, Necesidad y proporcionalidad, Responsabilidad compartida y Mejora continua.</p>

          <h2>3. Seguridad del sitio web</h2>
          <p>AEGRIX procura implementar medidas razonables para proteger su sitio web frente a riesgos comunes como accesos no autorizados, abuso de formularios, tráfico malicioso, alteraciones indebidas, exposición de información, errores técnicos o intentos de explotación.</p>
          <p>Estas medidas pueden incluir: Controles de acceso, buenas prácticas de desarrollo seguro, uso de proveedores tecnológicos confiables, configuraciones orientadas a reducir riesgos, medidas de protección frente a abuso, monitoreo técnico razonable, actualizaciones periódicas y uso de conexiones seguras.</p>

          <h2>4. Seguridad en servicios de ciberseguridad</h2>
          <p>Cuando AEGRIX preste servicios relacionados con ciberseguridad, dichos servicios se ejecutarán conforme al alcance contratado. El cliente reconoce que ningún servicio de ciberseguridad puede garantizar protección absoluta ni eliminación total de riesgos.</p>

          <h2>5. Responsabilidad del cliente y del usuario</h2>
          <p>El usuario es responsable de suministrar información veraz, proteger sus propias credenciales, no compartir información sensible por canales inseguros, implementar las recomendaciones de AEGRIX oportunamente y mantener actualizados sus propios sistemas.</p>

          <h2>6. Uso permitido de los canales digitales</h2>
          <p>Está prohibido intentar acceder sin autorización a sistemas de AEGRIX, realizar pruebas de penetración sin autorización escrita, enviar malware, ejecutar ataques de denegación de servicio o recolectar información mediante scraping no autorizado.</p>

          <h2>7. Manejo de accesos y credenciales</h2>
          <p>Cuando sea necesario que el cliente suministre accesos, AEGRIX los tratará bajo criterios de confidencialidad y mínimo privilegio. El cliente es responsable de revocar dichos accesos al finalizar el servicio.</p>

          <h2>8. Confidencialidad de la información</h2>
          <p>AEGRIX tratará con reserva la información técnica y comercial que reciba. No se divulgará información confidencial de clientes sin autorización, salvo por requerimiento legal o autoridad competente.</p>

          <h2>9. Protección de datos personales</h2>
          <p>La información personal será tratada conforme a la Política de Privacidad de AEGRIX y la normativa colombiana aplicable (Ley 1581 de 2012).</p>

          <h2>10. Desarrollo seguro</h2>
          <p>En proyectos de software, AEGRIX procura aplicar buenas prácticas de desarrollo seguro como separación de ambientes, validaciones de entrada, manejo responsable de errores y uso de dependencias confiables.</p>

          <h2>11. Seguridad en inteligencia artificial y datos</h2>
          <p>AEGRIX aplica criterios de seguridad y minimización en servicios de IA. El cliente debe validar los resultados generados por IA antes de utilizarlos para decisiones críticas.</p>

          <h2>12. Proveedores y servicios de terceros</h2>
          <p>AEGRIX utiliza proveedores externos confiables para hosting, nube y CRM, pero no controla totalmente sus sistemas ni responde por incidentes atribuibles exclusivamente a dichos proveedores.</p>

          <h2>13. Notificación de incidentes</h2>
          <p>Si AEGRIX identifica un incidente relevante, lo gestionará según su impacto y obligaciones legales. El cliente debe notificar sospechas de incidentes a <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a>.</p>

          <h2>14. Reporte responsable de vulnerabilidades</h2>
          <p>AEGRIX valora el reporte ético. No está autorizado explotar vulnerabilidades, acceder a información de terceros o realizar ataques de denegación de servicio durante el reporte.</p>

          <h2>15. Respaldo y conservación de información</h2>
          <p>Salvo contratación expresa de servicios de respaldo, el cliente es responsable de mantener copias actualizadas de su información crítica.</p>

          <h2>16. Continuidad y disponibilidad</h2>
          <p>AEGRIX procura mantener la disponibilidad de sus canales, pero esta puede verse afectada por mantenimiento, fallas técnicas de proveedores o eventos de fuerza mayor.</p>

          <h2>17. Limitación de responsabilidad en seguridad</h2>
          <p>AEGRIX implementa medidas razonables pero no responde por ataques sofisticados no atribuibles directamente, fallas de terceros, negligencia del usuario o falta de implementación de recomendaciones.</p>

          <h2>18. Cumplimiento legal y cooperación</h2>
          <p>AEGRIX cooperará con autoridades competentes cuando exista una obligación legal o requerimiento formal.</p>

          <h2>19. Actualización de esta política</h2>
          <p>AEGRIX podrá modificar esta política en cualquier momento publicándola en el sitio web.</p>

          <h2>20. Contacto de seguridad</h2>
          <p>
            Correo electrónico: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      ) : (
        <>
          <p>At AEGRIX, information security, digital asset protection, data confidentiality, and responsible management of technological risks are fundamental principles in our service delivery.</p>
          <p>This Security Policy describes the general guidelines AEGRIX adopts to protect its website, digital channels, and information received from users and clients in relation to our software engineering, cybersecurity, AI, and consulting services.</p>
          <p>This policy should be read alongside AEGRIX's Privacy Policy, Cookies Policy, and Terms and Conditions.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Scope</h2>
          <p>This policy applies to <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>, official digital channels, contact forms, commercial communications, and all digital interactions related to AEGRIX.</p>

          <h2>2. Security Principles</h2>
          <p>AEGRIX guides its security management under the principles of Confidentiality, Integrity, Availability, Least Privilege, Necessity and Proportionality, Shared Responsibility, and Continuous Improvement.</p>

          <h2>3. Website Security</h2>
          <p>AEGRIX implements reasonable measures to protect its website from common risks like unauthorized access, form abuse, and malicious traffic. These include access controls, secure development practices, and regular updates.</p>

          <h2>4. Cybersecurity Services</h2>
          <p>Security services are executed according to the contracted scope. Clients acknowledge that no service can guarantee absolute protection or total risk elimination.</p>

          <h2>5. Client and User Responsibility</h2>
          <p>Users are responsible for providing truthful information, protecting their credentials, and timely implementing AEGRIX's security recommendations.</p>

          <h2>6. Permitted Use</h2>
          <p>Unauthorized access attempts, penetration testing without written consent, malware delivery, and unauthorized scraping are strictly prohibited.</p>

          <h2>7. Access Management</h2>
          <p>When client access is required, it is handled under confidentiality and least privilege. Clients must revoke access once the service is complete.</p>

          <h2>8. Information Confidentiality</h2>
          <p>Technical and commercial information is treated as confidential and will not be disclosed without authorization except by legal requirement.</p>

          <h2>9. Personal Data Protection</h2>
          <p>Personal information is treated according to our Privacy Policy and applicable Colombian regulations (Law 1581 of 2012).</p>

          <h2>10. Secure Development</h2>
          <p>Software projects apply secure development practices including environment separation, input validation, and secure dependency management.</p>

          <h2>11. AI and Data Security</h2>
          <p>Security and minimization criteria are applied to AI services. Clients must validate AI-generated results before critical use.</p>

          <h2>12. Third-Party Providers</h2>
          <p>AEGRIX uses reliable external providers but is not responsible for incidents exclusively attributable to these third parties.</p>

          <h2>13. Incident Notification</h2>
          <p>Relevant incidents will be managed based on impact and legal duties. Suspected incidents should be reported to <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a>.</p>

          <h2>14. Responsible Vulnerability Disclosure</h2>
          <p>Ethical reporting is valued. Vulnerability exploitation and access to third-party data are not authorized during reporting.</p>

          <h2>15. Backup and Conservation</h2>
          <p>Unless backup services are explicitly contracted, clients are responsible for maintaining updated copies of their critical information.</p>

          <h2>16. Continuity and Availability</h2>
          <p>AEGRIX strives for channel availability, though it may be affected by maintenance or external provider failures.</p>

          <h2>17. Limitation of Security Liability</h2>
          <p>Reasonable measures are implemented, but AEGRIX is not responsible for sophisticated attacks, third-party failures, or user negligence.</p>

          <h2>18. Legal Compliance</h2>
          <p>AEGRIX will cooperate with competent authorities when a legal obligation or formal requirement exists.</p>

          <h2>19. Policy Updates</h2>
          <p>This policy may be updated at any time by publishing it on the website.</p>

          <h2>20. Security Contact</h2>
          <p>
            Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
