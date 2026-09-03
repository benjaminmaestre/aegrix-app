# Estado de remediación de auditoría web — 2026-09-03

Este documento registra el estado de los hallazgos técnicos, de privacidad, contenido y operación detectados durante la auditoría del sitio corporativo AEGRIX.

## Resumen ejecutivo

| Área | Estado | Nota |
|---|---|---|
| Seguridad de `POST /api/contact` | RESUELTO | Validación server-side, límites, escape, antiabuso, errores genéricos y no-cache. |
| Anti-bot / spam | RESUELTO | BotID server-side + honeypot + origen + rate limit IP/correo. Riesgo residual global aceptado para tráfico actual. |
| Headers / CSP | RESUELTO | CSP, HSTS, anti-clickjacking, nosniff, Referrer/Permissions/COOP/CORP. |
| Dependencias | RESUELTO | CI ejecuta audit de producción, lint y build; Next/Sharp actualizados. |
| Logs / PII | RESUELTO | Los errores no registran payloads completos ni datos personales del formulario. |
| Analytics / consentimiento | RESUELTO | GA solo carga con consentimiento de analítica; categorías separadas. |
| Cookies | RESUELTO | No hay consentimiento por mera navegación; preferencias reabribles y categorías explícitas. |
| Claims / métricas simuladas | RESUELTO | Eliminadas telemetrías y promesas absolutas ficticias; se conserva lenguaje fuerte respaldado. |
| AEGRIX 360 / marcos | RESUELTO | NIST, ISO 27001/27002, HIPAA y GDPR se mantienen como capacidades reales con lenguaje de assessment/readiness/assurance. |
| Legal / identidad | IMPLEMENTADO · VALIDACIÓN EXTERNA PENDIENTE | Datos reales, PQR, plazos, proveedores, retención, retracto y responsabilidad corregidos. Falta revisión final por abogado colombiano. |
| Accesibilidad / móvil | RESUELTO EN ALCANCE AUDITADO | Focus visible, reduced motion y grids móviles sustituyen carruseles problemáticos. |
| Revisión visual final | PENDIENTE DE APROBACIÓN | El PR continúa draft hasta aprobación visual y merge. |

## Seguridad del formulario

Implementado en `app/api/contact/route.ts`:

- Solo acepta `application/json`.
- Límite de body de 12 KB, comprobado por `Content-Length` y tamaño real recibido.
- Límites de longitud para nombre, empresa, correo y mensaje.
- Validación de correo en servidor.
- Rechazo de NUL y CR/LF en campos sensibles.
- Escape HTML antes de construir el correo.
- Sanitización del asunto para evitar inyección de cabeceras.
- Control de `Origin` y `Sec-Fetch-Site`.
- Honeypot.
- BotID Basic con verificación server-side.
- Rate limit por IP y correo, claves SHA-256, `429` y `Retry-After`.
- Respuestas `Cache-Control: no-store`.
- Error `503` si Resend no está configurado en producción, evitando falso éxito.
- Errores genéricos sin exponer datos personales completos.

### Riesgo residual aceptado

El contador IP/correo utiliza memoria por instancia y no se declara como rate limiting global distribuido. Para el volumen actual del sitio corporativo se acepta esta limitación porque existe defensa en profundidad con BotID server-side, honeypot, validación de origen y límites de entrada. El issue #3 debe reabrirse si existe abuso sostenido, crecimiento fuerte de tráfico o requisitos contractuales que exijan cuota global demostrable.

## Headers y navegador

Configurados en `next.config.ts`:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `frame-ancestors 'none'`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- `Cross-Origin-Resource-Policy`
- `Origin-Agent-Cluster`
- `X-Powered-By` deshabilitado

## Vulnerability disclosure

- Política pública en `/{lang}/seguridad`.
- Canal: `contacto@aegrix.com.co`, asunto `[SECURITY]`.
- Publicado `/.well-known/security.txt`.
- Reglas explícitas de investigación no destructiva y prohibición de acceso a datos de terceros, DoS, malware y persistencia.

## Privacidad y cookies

- Responsable identificado con datos reales suministrados por el titular.
- Canal formal para datos personales y PQR.
- Consultas: 10 días hábiles + hasta 5 adicionales.
- Reclamos: 15 días hábiles + hasta 8 adicionales.
- Proveedores identificados: Vercel, Resend y Google Analytics condicionado a consentimiento.
- Tratamiento internacional descrito.
- Retención operativa: prospectos 24 meses; marketing 24 meses de inactividad; logs 12 meses; documentación comercial/contable sujeta a conservación hasta 10 años o término obligatorio superior.
- Analytics, funcionales y marketing no se activan por mera navegación.
- Marketing permanece opcional e independiente.

## Términos comerciales

Corregido:

- Eliminada la cláusula absoluta de no reembolso.
- Incorporado retracto y excepciones cuando resulte aplicable.
- Incorporada reversión de pagos cuando legalmente proceda.
- Garantías y correcciones ligadas al alcance y proceso de aceptación.
- Limitación de responsabilidad sujeta a normas imperativas.
- Uso de portafolio condicionado a autorización o base contractual válida.
- Confidencialidad, propiedad intelectual, terminación y PQR clarificados.
- Enlace a la Superintendencia de Industria y Comercio.

## Contenido y credibilidad

El sitio conserva posicionamiento de ingeniería de élite, software robusto, seguridad, escalabilidad, observabilidad, alta disponibilidad como objetivo de arquitectura y monitoreo proactivo cuando corresponda. Se eliminaron únicamente datos o promesas que aparentaban evidencia inexistente: porcentajes ficticios, uptime simulado, estados `SECURED/Operational`, `100% protegido`, `sin fallos` y garantías absolutas.

## AEGRIX 360

- Página propia `/{lang}/aegrix-360`.
- Pulse · Compass · Assurance.
- Rutas específicas para NIST, ISO 27001/27002, HIPAA y GDPR.
- Diferenciación entre página comercial y Portal 360.
- Assessment, readiness, evidencia, hallazgos, remediación y assurance descritos sin presentarlos como certificación automática.

## Pendientes antes de merge

1. Revisión jurídica externa final por abogado colombiano (issue #2).
2. Aprobación visual final del PR.
3. Merge a `main` y smoke test de producción.

No quedan hallazgos críticos de seguridad conocidos de la auditoría original sin mitigación o decisión de riesgo documentada en esta rama.
