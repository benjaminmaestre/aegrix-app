# Estado de remediación de auditoría web — 2026-09-03

Este documento registra el estado de los hallazgos técnicos, de privacidad, contenido y operación detectados durante la auditoría del sitio corporativo AEGRIX.

## Resumen ejecutivo

| Área | Estado | Nota |
|---|---|---|
| Seguridad de `POST /api/contact` | RESUELTO | Validación server-side, límites, escape, antiabuso, errores genéricos y no-cache. |
| Anti-bot / spam | RESUELTO | BotID server-side + honeypot + origen + rate limit local y **Vercel Firewall distribuido en el edge: 5 solicitudes/IP/10 min, respuesta 429**. |
| Headers / CSP | RESUELTO | CSP con nonce por petición y `strict-dynamic`, sin `unsafe-inline` en `script-src` de producción; HSTS, anti-clickjacking, nosniff, Referrer/Permissions/COOP/CORP. |
| Dependencias | RESUELTO | CI ejecuta audit de producción, lint y build; Next/Sharp actualizados. |
| Code scanning | RESUELTO | CodeQL JavaScript/TypeScript activo en PR, `main` y ejecución semanal; análisis exitoso. |
| Logs / PII | RESUELTO | Los errores no registran payloads completos ni datos personales del formulario. |
| Analytics / consentimiento | RESUELTO | GA solo carga con consentimiento de analítica; categorías separadas y nonce CSP aplicado. |
| Cookies | RESUELTO | No hay consentimiento por mera navegación; preferencias reabribles y categorías explícitas. |
| Hardcode / configuración | RESUELTO EN ALCANCE | Secretos en variables de entorno; configuración pública centralizada en `lib/site-config.ts`; identidad legal pública centralizada en `lib/legal-identity.ts`. |
| Claims / métricas simuladas | RESUELTO | Eliminadas telemetrías y promesas absolutas ficticias; se conserva lenguaje fuerte respaldado. |
| AEGRIX 360 / marcos | RESUELTO | NIST, ISO 27001/27002, HIPAA y GDPR se mantienen como capacidades reales con lenguaje de assessment/readiness/assurance. |
| Legal / identidad | IMPLEMENTADO · VALIDACIÓN EXTERNA PENDIENTE | Datos reales, PQR, plazos, proveedores, retención, retracto y responsabilidad corregidos. Falta revisión final por abogado colombiano. |
| Seguridad del repositorio | IMPLEMENTADO · CHECKS POR CONFIRMAR | `main` tiene PR obligatorio, 1 aprobación, conversaciones resueltas, sin force push/borrado ni bypass de administradores. Falta confirmar que `validate` y, si está disponible, CodeQL estén configurados como required status checks. |
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
- Rate limit local por IP y correo, claves SHA-256, `429` y `Retry-After`.
- Respuestas `Cache-Control: no-store`.
- Error `503` si Resend no está configurado en producción, evitando falso éxito.
- Errores genéricos sin exponer datos personales completos.
- Orígenes y correos públicos centralizados en configuración, sin hardcodear secretos.

### Rate limiting distribuido

El rate limiting distribuido de Vercel Firewall quedó activo directamente en el edge para `/api/contact`:

- identificador: IP;
- umbral: **5 solicitudes por 10 minutos por IP**;
- respuesta al exceder: **HTTP 429 Too Many Requests**;
- aplicado en la infraestructura edge de Vercel.

La regla distribuida complementa, no sustituye, las capas de la aplicación: BotID, honeypot, control de origen, límites de entrada y rate limit local por correo/IP. Issue #3 cerrado como completado.

## CSP y headers del navegador

La CSP se genera por petición en `proxy.ts` con nonce criptográficamente aleatorio y se propaga a Next mediante `x-nonce`.

En producción, `script-src` utiliza `'self'`, nonce por petición y `'strict-dynamic'`, sin `'unsafe-inline'` para scripts. El nonce también se pasa a los scripts propios y a Google Analytics cuando existe consentimiento.

`next.config.ts` conserva HSTS, `nosniff`, `DENY`, Referrer Policy, Permissions Policy, COOP/CORP, Origin-Agent-Cluster y `X-Powered-By` deshabilitado. `style-src` conserva `'unsafe-inline'` por compatibilidad con el renderizado/estilos actuales.

## Dependencias, CI y CodeQL

El workflow CI ejecuta `npm ci`, `npm audit --omit=dev --audit-level=high`, lint y build de producción. `.github/workflows/codeql.yml` ejecuta CodeQL JavaScript/TypeScript en pull requests hacia `main`, pushes a `main` y semanalmente.

## Seguridad del repositorio

La protección de `main` fue activada directamente en GitHub con:

- pull request obligatorio;
- **1 aprobación requerida**;
- resolución de conversaciones;
- force push bloqueado;
- borrado de `main` bloqueado;
- sin bypass de administradores.

Queda por confirmar en la configuración clásica de Branch Protection que **Require status checks to pass before merging** esté habilitado y que `validate` sea obligatorio; si CodeQL aparece como check seleccionable, debe exigirse también. El conector no puede leer ese detalle porque GitHub devuelve 403 para el endpoint clásico de branch protection y el repositorio no usa Rulesets. Issue #5 permanece abierto únicamente para esa confirmación.

## Hardcode y secretos

- `RESEND_API_KEY` se obtiene exclusivamente de `process.env`.
- `NEXT_PUBLIC_GA_ID` se obtiene de entorno; es identificador público, no secreto.
- `.env*` está excluido por `.gitignore`; el repo solo contiene `.env.example` sin secretos.
- Configuración pública/operativa centralizada en `lib/site-config.ts`: dominio, `www`, Portal 360, correo público/remitente por defecto y WhatsApp.
- URLs de WhatsApp generadas mediante una única función.
- Identidad legal pública centralizada en `lib/legal-identity.ts`.
- Allowlist de orígenes del formulario usa la configuración central.

## Vulnerability disclosure

- Política pública en `/{lang}/seguridad`.
- Canal: `contacto@aegrix.com.co`, asunto `[SECURITY]`.
- `/.well-known/security.txt` se sirve desde una única implementación efectiva mediante `app/api/securitytxt/route.ts` y el proxy.
- `Expires` dentro de un horizonte inferior a un año.
- Reglas explícitas de investigación no destructiva y prohibición de acceso a datos de terceros, DoS, malware y persistencia.

## Privacidad y cookies

- Responsable identificado con datos reales suministrados por el titular.
- Canal formal para datos personales y PQR.
- Consultas: 10 días hábiles + hasta 5 adicionales.
- Reclamos: 15 días hábiles + hasta 8 adicionales.
- Proveedores identificados: Vercel, Resend y Google Analytics condicionado a consentimiento.
- Tratamiento internacional descrito.
- Retención operativa definida.
- Analytics, funcionales y marketing no se activan por mera navegación.
- Marketing opcional e independiente.

## Términos comerciales

Se eliminó la cláusula absoluta de no reembolso y se incorporaron retracto/excepciones, reversión de pagos cuando proceda, garantías/correcciones ligadas al alcance, responsabilidad sujeta a normas imperativas, autorización para portafolio, confidencialidad, propiedad intelectual, terminación, PQR y enlace a la SIC.

## Contenido y credibilidad

El sitio conserva posicionamiento de ingeniería de élite, software robusto, seguridad, escalabilidad, observabilidad, alta disponibilidad como objetivo de arquitectura y monitoreo proactivo cuando corresponda. Se eliminaron porcentajes ficticios, uptime simulado, estados `SECURED/Operational`, `100% protegido`, `sin fallos` y garantías absolutas.

## AEGRIX 360

- Página propia `/{lang}/aegrix-360`.
- Pulse · Compass · Assurance.
- Rutas específicas para NIST, ISO 27001/27002, HIPAA y GDPR.
- Diferenciación entre página comercial y Portal 360.
- Assessment, readiness, evidencia, hallazgos, remediación y assurance sin presentarlos como certificación automática.

## Limpieza técnica

Se retiraron el script local obsoleto `scratch/check_tags_3001.js`, copias redundantes de `security.txt` y el `vercel.json` que ya no era necesario.

## Pendientes antes de merge

1. Confirmar que `validate` y, si está disponible, CodeQL están configurados como **required status checks** de `main` (issue #5).
2. Revisión jurídica externa final por abogado colombiano (issue #2).
3. Aprobación visual final del PR.
4. Merge a `main` y smoke test de producción.

Los hallazgos críticos originales del endpoint, navegador y protección antiabuso están mitigados. El rate limiting distribuido ya está activo en Vercel Firewall.