import { buildWhatsAppUrl } from '@/lib/site-config';

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'AEGRIX 360', href: '/aegrix-360' },
  { label: 'Sectores', href: '/#sectores' },
  { label: 'Metodología', href: '/#metodologia' },
  { label: 'Contacto', href: '/#contacto' },
];

export const problemCards = [
  {
    id: 1,
    title: 'Datos dispersos',
    description: 'Información fragmentada en archivos, correos y plataformas sin una arquitectura que facilite su uso.',
    icon: 'Database',
  },
  {
    id: 2,
    title: 'Web sin objetivos claros',
    description: 'Sitios que no tienen un recorrido de conversión, medición o contacto claramente definido.',
    icon: 'Globe',
  },
  {
    id: 3,
    title: 'Reportes manuales',
    description: 'Procesos repetitivos en hojas de cálculo que pueden dificultar la trazabilidad y el análisis oportuno.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Controles de seguridad incompletos',
    description: 'Accesos, configuraciones o procesos que requieren revisión para reducir riesgos digitales relevantes.',
    icon: 'Lock',
  },
];

export const productDivisions = [
  {
    id: 'shield',
    title: 'AEGRIX Shield',
    tagline: 'Ciberseguridad, riesgo y protección de datos.',
    description: 'Evaluamos postura de seguridad, riesgos y controles para fortalecer organizaciones y preparar evaluaciones sobre marcos reconocidos cuando el alcance lo requiere.',
    features: ['Evaluación de riesgos y controles', 'Gestión de identidades y accesos', 'Revisión de configuraciones y vulnerabilidades', 'NIST, ISO/IEC 27001/27002, HIPAA y GDPR según alcance'],
  },
  {
    id: 'web',
    title: 'AEGRIX Software & Web',
    tagline: 'Software robusto, seguro y preparado para escalar.',
    description: 'Diseñamos y desarrollamos soluciones web y software con arquitectura, seguridad, rendimiento, mantenibilidad y criterios de entrega definidos.',
    features: ['Aplicaciones web y software empresarial', 'Desarrollo full-stack', 'Landing pages y sitios corporativos', 'Arquitectura, rendimiento y escalabilidad'],
  },
  {
    id: 'data-ai',
    title: 'AEGRIX Data & IA',
    tagline: 'Datos, automatización e IA aplicada.',
    description: 'Implementamos soluciones de datos, automatización e inteligencia artificial orientadas a procesos y casos de uso específicos.',
    features: ['Agentes y asistentes de IA', 'Capacitación aplicada en IA', 'Automatización de procesos', 'Dashboards y analítica'],
  },
  {
    id: 'care',
    title: 'AEGRIX Care',
    tagline: 'Soporte, monitoreo y mejora continua.',
    description: 'Acompañamiento técnico bajo planes de servicio con prioridades, monitoreo u observabilidad cuando aplica y tiempos de atención previamente acordados.',
    features: ['Soporte técnico según plan', 'Monitoreo proactivo según alcance', 'Actualizaciones y mantenimiento', 'Optimización y acompañamiento consultivo'],
  },
];

export const diagnosticChecklist = [
  { category: 'Seguridad', items: ['Accesos, correo y autenticación', 'Riesgos, controles y evidencia'] },
  { category: 'Marcos', items: ['NIST e ISO/IEC 27001/27002', 'HIPAA y GDPR según alcance'] },
  { category: 'Web & Conversión', items: ['Rendimiento y experiencia de usuario', 'Formularios, medición y recorridos de contacto'] },
  { category: 'Datos & IA', items: ['Reportes y fuentes de información', 'Oportunidades de automatización e IA'] },
];

export const sectors = [
  { name: 'Fintech & Legal', icon: 'Building2', path: 'legal-tech' },
  { name: 'E-commerce & Logística', icon: 'Package', path: 'industrial-logistica' },
  { name: 'Constructoras & Servicios', icon: 'Briefcase', path: 'construction-tech' },
  { name: 'Educación & Corporativo', icon: 'GraduationCap', path: 'education-corporate' },
  { name: 'Salud Premium', icon: 'Activity', path: 'health-premium' },
  { name: 'Real Estate & Proyectos', icon: 'Home', path: 'real-estate' },
];

export const commandCapabilities = [
  {
    layer: 'Security',
    title: 'Riesgos y controles',
    description: 'Revisión del estado actual, hallazgos, prioridades y medidas propuestas.',
  },
  {
    layer: 'Web',
    title: 'Rendimiento y conversión',
    description: 'Medición de experiencia, velocidad, formularios y recorridos relevantes.',
  },
  {
    layer: 'Data',
    title: 'Fuentes y reportes',
    description: 'Inventario de fuentes, integraciones y oportunidades para mejorar trazabilidad.',
  },
  {
    layer: 'AI',
    title: 'Casos de uso',
    description: 'Identificación de tareas donde automatización o IA pueden aportar valor medible.',
  },
];

export const platformBlocks = [
  {
    id: 1,
    label: 'AEGRIX Control Layer',
    title: 'Una estrategia para conectar seguridad, software, datos e IA.',
    description: 'Organizamos capacidades digitales dentro de un alcance común, con prioridades, responsables y entregables definidos.',
    cta: 'Ver enfoque',
  },
];

export const processSteps = [
  { number: '01', title: 'Diagnóstico', description: 'Revisión del contexto, necesidades, riesgos y oportunidades relevantes.' },
  { number: '02', title: 'Diseño', description: 'Definición de alcance, arquitectura, dependencias y criterios de aceptación.' },
  { number: '03', title: 'Implementación', description: 'Ejecución técnica y validación de los entregables acordados.' },
  { number: '04', title: 'Seguimiento', description: 'Revisión de resultados y mejora continua cuando el servicio contratado lo contempla.' },
];

export const implementationModels = [
  {
    title: 'Project-Based',
    desc: 'Proyectos con objetivos, alcance, entregables y condiciones comerciales definidos.',
    benefits: ['Alcance definido', 'Presupuesto acordado', 'Cronograma de referencia'],
  },
  {
    title: 'Strategic Partnership',
    desc: 'Acompañamiento recurrente con prioridades, capacidad y tiempos de atención acordados.',
    benefits: ['Capacidad reservada', 'Mejora continua', 'Consultoría recurrente'],
  },
];

export const webBenefits = [
  { title: 'Diseño profesional', desc: 'Interfaces alineadas con la marca, el contenido y el objetivo del proyecto.' },
  { title: 'Rendimiento técnico', desc: 'Optimización de carga y experiencia dentro de criterios medibles.' },
  { title: 'Conversión', desc: 'Formularios y recorridos de contacto diseñados alrededor de objetivos definidos.' },
  { title: 'Medición', desc: 'Analítica y eventos configurables según consentimiento y necesidades del proyecto.' },
];

export const WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero iniciar una evaluación con AEGRIX 360 para mi organización.');
export const WHATSAPP_URL_WEB = buildWhatsAppUrl('Hola, quiero revisar si mi página web está perdiendo clientes.');
export const WHATSAPP_URL_AI = buildWhatsAppUrl('Hola, quiero automatizar procesos con IA en mi empresa.');
