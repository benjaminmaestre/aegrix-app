# Estado de remediación de auditoría web — 2026-09-03

Este documento registra el estado de los hallazgos técnicos, de privacidad, contenido y operación detectados durante la auditoría del sitio corporativo AEGRIX.

## Resumen ejecutivo

| Área | Estado | Nota |
|---|---|---|
| Seguridad de `POST /api/contact` | RESUELTO | Validación server-side, límites, escape, antiabuso, errores genéricos y no-cache. |
| Anti-bot / spam | RESUELTO · HARDENING DE EDGE PENDIENTE | BotID server-side + honeypot + origen + rate limit IP/correo. Issue #3 reabierto hasta publicar una regla distribuida en Vercel Firewall. |
| Headers / CSP | RESUELTO | CSP con nonce por petición y `strict-dynamic` para scripts, sin `unsafe-inline` en `script-src` de producción; HSTS, anti-clickjacking, nosniff, Referrer/Permissions/COOP/CORP. |
| Dependencias | RESUELTO | CI ejecuta audit de producción, lint y build; Next/Sharp actualizados. |
| Code scanning | RESUELTO | CodeQL JavaScript/TypeScript activo en PR, `main` y ejecución semanal; primer análisis exitoso. |
| Logs / PII | RESUELTO | Los errores no registran payloads completos ni datos personales del formulario. |
| Analytics / consentimiento | RESUELTO | GA solo carga con consentimiento de analítica; categorías separadas y nonce CSP aplicado. |
| Cookies | RESUELTO | No hay consentimiento por mera navegación; preferencias reabribles y categorías explícitas. |
| Hardcode / configuración | RESUELTO EN ALCANCE | Secretos permanecen en variables de entorno; dominio, portal, correo público y WhatsApp están centralizados en `lib/site-config.ts`. Identidad legal pública centralizada en `lib/legal-identity.ts`. |
| Claims / métricas simuladas | RESUELTO | Eliminadas telemetrías y promesas absolutas ficticias; se conserva lenguaje fuerte respaldado. |
| AEGRIX 360 / marcos | RESUELTO | NIST, ISO 27001/27002, HIPAA y GDPR se mantienen como capacidades reales con lenguaje de assessment/readiness/assurance. |
| Legal / identidad | IMPLEMENTADO · VALIDACIÓN EXTERNA PENDIENTE | Datos reales, PQR, plazos, proveedores, retención, retracto y responsabilidad corregidos. Falta revisión final por abogado colombiano. |
| Seguridad del repositorio | PENDIENTE DE PLATAFORMA | `main` aún debe protegerse con PR + checks obligatorios. Seguimiento en issue #5. |
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
- Orígenes y correos públicos centralizados en configuración, sin hardcodear secretos.

### Rate limiting distribuido

El contador IP/correo de la aplicación utiliza memoria por instancia y **no se declara como rate limiting global distribuido**. Se mantiene como capa adicional junto con BotID, honeypot, validación de origen y límites de entrada.

El issue #3 está abierto hasta completar la capa de edge en Vercel Firewall. Configuración objetivo inicial:

- ruta exacta `/api/contact`;
- método `POST`;
- acción `Rate Limit`;
- identificador IP;
- umbral inicial equivalente a 10 solicitudes por 10 minutos por IP, o el intervalo soportado más cercano que mantenga una política conservadora;
- respuesta HTTP `429`;
- mantener además el límite local por correo.

El issue solo debe cerrarse después de que la regla figure publicada/activa y una prueba de ráfaga demuestre que el edge devuelve `429`.

## CSP y headers del navegador

La CSP se genera por petición en `proxy.ts` con nonce criptográficamente aleatorio y se propaga a Next mediante `x-nonce`.

En producción, `script-src` utiliza:

- `'self'`;
- nonce por petición;
- `'strict-dynamic'`;
- sin `'unsafe-inline'` para scripts.

El nonce también se pasa a los scripts inline propios y a Google Analytics cuando existe consentimiento.

`next.config.ts` conserva los headers estáticos complementarios:

- `Strict-Transport-Security`;
- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `Permissions-Policy`;
- `Cross-Origin-Opener-Policy`;
- `Cross-Origin-Resource-Policy`;
- `Origin-Agent-Cluster`;
- `X-Powered-By` deshabilitado.

`style-src` conserva `'unsafe-inline'` por compatibilidad con el renderizado/estilos actuales. La restricción crítica de ejecución de JavaScript ya se movió a nonce.

## Dependencias, CI y CodeQL

El workflow CI ejecuta:

- instalación reproducible con `npm ci`;
- `npm audit --omit=dev --audit-level=high`;
- lint;
- build de producción.

Además, `.github/workflows/codeql.yml` ejecuta CodeQL para JavaScript/TypeScript:

- en pull requests hacia `main`;
- en pushes a `main`;
- semanalmente.

El primer análisis de CodeQL sobre esta rama terminó exitosamente.

## Seguridad del repositorio

Se comprobó que `main` no está protegida actualmente y no tiene status checks obligatorios a nivel de GitHub. Esto no es un fallo de la aplicación, pero sí permite que un push directo omita el proceso de PR/CI.

Issue #5 documenta la configuración requerida:

- exigir pull request antes de merge;
- exigir `validate` del CI;
- exigir CodeQL cuando quede registrado como check disponible;
- exigir resolución de conversaciones;
- bloquear force pushes;
- bloquear borrado de `main`;
- limitar bypass a emergencias explícitas.

No se marcará como resuelto hasta verificar mediante GitHub que `main` figura protegida.

## Hardcode y secretos

- `RESEND_API_KEY` se obtiene exclusivamente de `process.env`.
- `NEXT_PUBLIC_GA_ID` se obtiene de entorno; es un identificador público de medición, no un secreto.
- `.env*` está excluido por `.gitignore`; el repo solo contiene `.env.example` sin valores secretos.
- La configuración pública y operativa está centralizada en `lib/site-config.ts`: origen canónico, `www`, Portal 360, correo público/remitente por defecto y número de WhatsApp.
- Las URLs de WhatsApp se generan mediante `buildWhatsAppUrl()` en vez de repetir el número en múltiples archivos.
- La identidad legal pública permanece centralizada en `lib/legal-identity.ts`; no se trata como secreto porque debe publicarse en las páginas legales.
- El allowlist de orígenes del formulario usa la configuración central, evitando divergencias entre dominios.

## Vulnerability disclosure

- Política pública en `/{lang}/seguridad`.
- Canal: `contacto@aegrix.com.co`, asunto `[SECURITY]`.
- `/.well-known/security.txt` se sirve desde una única implementación efectiva (`app/api/securitytxt/route.ts`) a través del proxy.
- `Expires` se mantiene dentro de un horizonte inferior a un año.
- Se eliminaron rutas, archivos estáticos y rewrites duplicados usados durante el diagnóstico.
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

## Limpieza técnica

Se retiraron:

- script local obsoleto `scratch/check_tags_3001.js`;
- copias redundantes de `security.txt`;
- `vercel.json` que ya no era necesario para este flujo.

Esto reduce configuración duplicada y evita que futuras correcciones se apliquen a una copia pero no a otra.

## Pendientes antes de merge

1. Publicar y probar el rate limiting distribuido de Vercel Firewall (issue #3).
2. Proteger `main` y exigir PR/checks en GitHub (issue #5).
3. Revisión jurídica externa final por abogado colombiano (issue #2).
4. Aprobación visual final del PR.
5. Merge a `main` y smoke test de producción.

Los hallazgos críticos originales del endpoint y del navegador están mitigados en esta rama. Los dos controles técnicos aún pendientes son de plataforma y están documentados como tales; no se consideran implementados hasta verificarlos activos.
