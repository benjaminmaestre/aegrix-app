import React from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { getDictionary } from '@/lib/get-dictionary';

export default async function CookiesPolicyPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { cookies } = dict.legal;
  const lastUpdated = lang === 'es' ? '5 de mayo de 2026' : 'May 5, 2026';

  return (
    <LegalPageLayout title={cookies.title} lastUpdated={lastUpdated}>
      {lang === 'es' ? (
        <>
          <p>La presente Política de Cookies explica cómo AEGRIX utiliza cookies, tecnologías similares, herramientas de medición, analítica, seguimiento y almacenamiento local cuando los usuarios acceden o navegan en el sitio web <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>.</p>
          <p>Al acceder, navegar o continuar utilizando este sitio web, el usuario reconoce haber leído esta Política de Cookies y acepta el uso de cookies conforme a las condiciones aquí descritas.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Responsable del sitio web</h2>
          <p>
            <strong>AEGRIX</strong><br />
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Correo electrónico: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Actividad: ingeniería de software, ciberseguridad, analítica de datos e inteligencia artificial.
          </p>

          <h2>2. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que el sitio funcione correctamente, mejoran tu experiencia y proporcionan información técnica y estadística a los propietarios del sitio.</p>

          <h2>3. Tecnologías similares</h2>
          <p>AEGRIX podrá utilizar píxeles de seguimiento, etiquetas (tags), scripts de analítica y almacenamiento local para medir el tráfico, prevenir abusos y optimizar la seguridad de la infraestructura tecnológica.</p>

          <h2>4. Finalidades del uso de cookies</h2>
          <p>Utilizamos cookies para garantizar el funcionamiento técnico, recordar tus preferencias, medir el rendimiento, proteger el sitio contra ataques y optimizar nuestras comunicaciones comerciales y estratégicas.</p>

          <h2>5. Tipos de cookies que podemos utilizar</h2>
          <ul>
            <li><strong>Estrictamente necesarias:</strong> Indispensables para la operación básica, seguridad y estabilidad del sitio.</li>
            <li><strong>Rendimiento y analítica:</strong> Nos permiten entender cómo interactúas con la web para mejorar la velocidad y usabilidad.</li>
            <li><strong>Funcionales:</strong> Recuerdan preferencias como el idioma y mejoran la personalización.</li>
            <li><strong>Seguridad:</strong> Detectan tráfico sospechoso y protegen la integridad de los servicios digitales.</li>
            <li><strong>Publicitarias o marketing:</strong> Miden la efectividad de nuestras campañas y optimizan nuestras propuestas comerciales.</li>
          </ul>

          <h2>6. Cookies de terceros</h2>
          <p>Podemos utilizar servicios de analítica (Google Analytics), CRM, hosting y herramientas de seguridad de proveedores externos que pueden instalar sus propias cookies bajo sus políticas independientes.</p>

          <h2>7. Base legal y autorización</h2>
          <p>El uso de cookies se basa en finalidades legítimas de operación y seguridad. Al continuar navegando o aceptar el banner de cookies, autorizas su uso conforme a esta política.</p>

          <h2>8. Gestión y desactivación de cookies</h2>
          <p>Puedes aceptar, rechazar o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que bloquearlas puede afectar la funcionalidad y estabilidad del sitio web.</p>

          <h2>9. Configuración desde el navegador</h2>
          <p>Puedes gestionar las cookies en las secciones de Privacidad o Seguridad de Google Chrome, Mozilla Firefox, Safari o Microsoft Edge.</p>

          <h2>10. Consentimiento y retiro</h2>
          <p>Puedes retirar o modificar tu consentimiento en cualquier momento eliminando manualmente las cookies de tu navegador o ajustando tus preferencias en nuestro panel de configuración si está disponible.</p>

          <h2>11. Tratamiento de datos personales</h2>
          <p>Cualquier información asociada a cookies que constituya un dato personal será tratada conforme a nuestra Política de Privacidad y la Ley 1581 de 2012.</p>

          <h2>12. Transferencia a terceros</h2>
          <p>La información analítica puede ser procesada por proveedores tecnológicos nacionales o internacionales que cumplen con estándares razonables de seguridad.</p>

          <h2>13. Conservación</h2>
          <p>La duración varía según la finalidad: algunas expiran al cerrar la sesión, mientras que otras permanecen para recordar preferencias en futuras visitas.</p>

          <h2>14. Dispositivos móviles</h2>
          <p>En móviles se aplican las mismas reglas, pudiendo gestionarse desde el navegador móvil o los ajustes de privacidad del sistema operativo.</p>

          <h2>15. Responsabilidad del usuario</h2>
          <p>El usuario es responsable de configurar su entorno de navegación según sus necesidades de privacidad.</p>

          <h2>16. Limitación de responsabilidad</h2>
          <p>AEGRIX no responde por configuraciones restrictivas del usuario que limiten el sitio, ni por cookies instaladas por terceros bajo sus propias políticas.</p>

          <h2>17. Actualización</h2>
          <p>Esta política podrá ser modificada para adaptarse a cambios legales o técnicos, publicándose siempre la versión más reciente en esta web.</p>

          <h2>18. Contacto</h2>
          <p>
            Correo electrónico: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Sitio web: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      ) : (
        <>
          <p>This Cookies Policy explains how AEGRIX uses cookies, similar technologies, measurement tools, analytics, tracking, and local storage when users access or browse the website <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>.</p>
          <p>By accessing or continuing to use this website, the user acknowledges having read this Policy and accepts the use of cookies under the conditions described here.</p>

          <hr className="border-white/5 my-8" />

          <h2>1. Data Controller</h2>
          <p>
            <strong>AEGRIX</strong><br />
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a><br />
            Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Activity: software engineering, cybersecurity, data analytics, and artificial intelligence.
          </p>

          <h2>2. What are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They help the site function correctly, improve your experience, and provide technical and statistical information to the site owners.</p>

          <h2>3. Similar Technologies</h2>
          <p>AEGRIX may use tracking pixels, tags, analytics scripts, and local storage to measure traffic, prevent abuse, and optimize technological infrastructure security.</p>

          <h2>4. Purposes of Cookie Use</h2>
          <p>We use cookies to guarantee technical operation, remember your preferences, measure performance, protect the site against attacks, and optimize our commercial and strategic communications.</p>

          <h2>5. Types of Cookies We Use</h2>
          <ul>
            <li><strong>Strictly Necessary:</strong> Essential for basic operation, security, and stability of the site.</li>
            <li><strong>Performance and Analytics:</strong> Help us understand how you interact with the web to improve speed and usability.</li>
            <li><strong>Functional:</strong> Remember preferences like language and improve personalization.</li>
            <li><strong>Security:</strong> Detect suspicious traffic and protect the integrity of digital services.</li>
            <li><strong>Marketing:</strong> Measure the effectiveness of our campaigns and optimize commercial proposals.</li>
          </ul>

          <h2>6. Third-Party Cookies</h2>
          <p>We may use analytics (Google Analytics), CRM, hosting, and security tools from external providers who may install their own cookies under independent policies.</p>

          <h2>7. Legal Basis and Authorization</h2>
          <p>Cookie use is based on legitimate operation and security purposes. By continuing to browse or accepting the cookie banner, you authorize their use according to this policy.</p>

          <h2>8. Management and Deactivation</h2>
          <p>You can accept, reject, or delete cookies from your browser settings. Note that blocking them may affect the functionality and stability of the website.</p>

          <h2>11. Personal Data Treatment</h2>
          <p>Any information associated with cookies that constitutes personal data will be treated according to our Privacy Policy and Law 1581 of 2012.</p>

          <h2>13. Conservation</h2>
          <p>Duration varies by purpose: some expire at session close, while others remain to remember preferences for future visits.</p>

          <h2>17. Updates</h2>
          <p>This policy may be modified to adapt to legal or technical changes, always publishing the most recent version on this website.</p>

          <h2>18. Contact</h2>
          <p>
            Email: <a href="mailto:contacto@aegrix.co" className="text-aegrix-cyan">contacto@aegrix.co</a><br />
            Website: <a href="https://aegrix.co" className="text-aegrix-cyan">https://aegrix.co</a>
          </p>
        </>
      )}
    </LegalPageLayout>
  );
}
