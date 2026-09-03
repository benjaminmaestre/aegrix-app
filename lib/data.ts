export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/#servicios' },
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
    tagline: 'Ciberseguridad y protección de datos.',
    description: 'Evaluamos riesgos y controles para proponer mejoras de seguridad acordes con el alcance y el contexto de cada organización.',
    features: ['Evaluación de riesgos y controles', 'Gestión de identidades y accesos', 'Revisión de configuraciones y vulnerabilidades', 'Privacidad y marcos de referencia según alcance'],
  },
  {
    id: 'web',
    title: 'AEGRIX Software & Web',
    tagline: 'Software y experiencias web para objetivos concretos.',
    description: 'Diseñamos y desarrollamos soluciones web y software con alcance técnico, criterios de rendimiento y entregables definidos.',
    features: ['Aplicaciones web y software empresarial', 'Desarrollo full-stack', 'Landing pages y sitios corporativos', 'Arquitectura y rendimiento técnico'],
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
    tagline: 'Soporte y mejora continua.',
    description: 'Acompañamiento técnico bajo planes de servicio, prioridades y tiempos de atención previamente acordados.',
    features: ['Soporte técnico según plan', 'Optimización periódica', 'Actualizaciones y mantenimiento', 'Acompañamiento consultivo'],
  },
];

export const diagnosticChecklist = [
  { category: 'Seguridad', items: ['Accesos, correo y autenticación', 'Riesgos y controles relevantes'] },
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

export const WHATSAPP_URL = 'https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20digital%20360%20para%20mi%20empresa.';
export const WHATSAPP_URL_WEB = 'https://wa.me/573107379163?text=Hola,%20quiero%20revisar%20si%20mi%20p%C3%A1gina%20web%20est%C3%A1%20perdiendo%20clientes.';
export const WHATSAPP_URL_AI = 'https://wa.me/573107379163?text=Hola,%20quiero%20automatizar%20procesos%20con%20IA%20en%20mi%20empresa.';
