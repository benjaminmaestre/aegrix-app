import { 
  NavItem, 
  CommandMetric, 
  ProblemCard, 
  PlatformBlock, 
  ServiceCard, 
  SectorCard, 
  ProcessStep, 
  DifferentiatorCard, 
  ImplementationPlan, 
  UseCase, 
  FAQItem,
  FunnelStep
} from './types';

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Diagnóstico 360', href: '#diagnostico' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
];

export const commandMetrics: CommandMetric[] = [
  { layer: 'Security Layer', label: 'Protección activa', value: '100%', status: 'active' },
  { layer: 'Web Layer', label: 'Alta velocidad', value: '0.8s', status: 'active' },
  { layer: 'Data Layer', label: 'Fuentes conectadas', value: '24/24', status: 'info' },
  { layer: 'AI Layer', label: 'Reportes inteligentes', value: 'Activo', status: 'active' },
  { layer: 'Decision Layer', label: 'Eficiencia operativa', value: '+32%', status: 'active' },
  { layer: 'System', label: 'Alertas críticas', value: '0', status: 'active' },
];

export const problemCards: ProblemCard[] = [
  { 
    icon: 'Database', 
    title: 'Datos dispersos', 
    description: 'Información repartida entre Excel, WhatsApp y correos que dificultan ver el panorama completo.' 
  },
  { 
    icon: 'Globe', 
    title: 'Web sin conversión', 
    description: 'Sitios que no generan confianza, cargan lento y no convierten visitantes en clientes reales.' 
  },
  { 
    icon: 'Clock', 
    title: 'Reportes manuales', 
    description: 'Horas perdidas copiando y pegando datos en informes que podrían estar automatizados.' 
  },
  { 
    icon: 'Lock', 
    title: 'Información vulnerable', 
    description: 'Datos sensibles sin controles de acceso, copias de seguridad ni políticas de protección.' 
  },
];

export const platformBlocks: PlatformBlock[] = [
  {
    id: 'shield',
    label: 'Shield',
    title: 'Protección de Activos',
    description: 'Fortalecemos la infraestructura, accesos y hábitos digitales para reducir riesgos críticos.',
    cta: 'Proteger mi empresa'
  },
  {
    id: 'web',
    label: 'Web',
    title: 'Presencia de Alto Rendimiento',
    description: 'Desarrollamos ecosistemas web rápidos, seguros y diseñados para vender.',
    cta: 'Mejorar mi presencia'
  },
  {
    id: 'data',
    label: 'Data & AI',
    title: 'Inteligencia Operativa',
    description: 'Convertimos datos en dashboards e IA que acelera la toma de decisiones.',
    cta: 'Potenciar con datos'
  }
];

export const capabilities: ServiceCard[] = [
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Ciberseguridad empresarial',
    description: 'Evaluamos y fortalecemos los puntos críticos de tu operación digital.',
    items: ['Diagnóstico de seguridad', 'Gestión de accesos', 'Protección de correos', 'Backups críticos']
  },
  {
    id: 'web',
    icon: 'Globe',
    title: 'Desarrollo web seguro',
    description: 'Sitios corporativos y landings de alta velocidad con Next.js.',
    items: ['Optimización SEO', 'Conversión UX', 'Integración CRM', 'Seguridad SSL']
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Analítica de datos',
    description: 'Transformamos información dispersa en decisiones estratégicas.',
    items: ['Dashboards Power BI', 'Modelado de datos', 'Automatización de KPIs', 'Limpieza de datos']
  },
  {
    id: 'ai',
    icon: 'Bot',
    title: 'Automatización IA',
    description: 'Implementamos IA para reducir tareas repetitivas y errores.',
    items: ['Chatbots internos', 'Procesamiento de docs', 'Alertas inteligentes', 'Flujos de trabajo']
  },
  {
    id: 'care',
    icon: 'Wrench',
    title: 'AEGRIX Care',
    description: 'Acompañamiento y mantenimiento continuo de tu infraestructura.',
    items: ['Soporte técnico', 'Actualizaciones', 'Monitoreo 24/7', 'Mejora continua']
  }
];

export const sectors: SectorCard[] = [
  { id: '1', icon: 'Building2', title: 'Empresas de servicios', description: 'Optimización de leads y procesos.' },
  { id: '2', icon: 'UtensilsCrossed', title: 'Comercios y restaurantes', description: 'Digitalización y control de ventas.' },
  { id: '3', icon: 'Package', title: 'Bodegas y logística', description: 'Trazabilidad y dashboards de stock.' },
  { id: '4', icon: 'Briefcase', title: 'Oficinas y pymes', description: 'Seguridad y orden digital.' },
  { id: '5', icon: 'GraduationCap', title: 'Instituciones educativas', description: 'Gestión de datos y presencia web.' },
  { id: '6', icon: 'Church', title: 'Iglesias y eventos', description: 'Conectividad y administración segura.' },
  { id: '7', icon: 'TrendingUp', title: 'Empresas comerciales', description: 'Escalabilidad con datos.' },
  { id: '8', icon: 'Rocket', title: 'Marcas en crecimiento', description: 'Base tecnológica para escalar.' },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Analizamos', description: 'Revisamos tu estado actual de seguridad, web y procesos de datos.' },
  { number: '02', title: 'Priorizamos', description: 'Identificamos las acciones de mayor impacto y menor fricción.' },
  { number: '03', title: 'Implementamos', description: 'Desarrollamos soluciones con enfoque profesional y escalable.' },
  { number: '04', title: 'Acompañamos', description: 'Mantenemos y mejoramos la infraestructura continuamente.' },
];

export const differentiators: DifferentiatorCard[] = [
  { id: '1', icon: 'Eye', title: 'Visión integral', description: 'No vemos la tecnología aislada, sino como un sistema conectado.' },
  { id: '2', icon: 'Target', title: 'Enfoque en negocio', description: 'Priorizamos lo que realmente ayuda a vender más y gastar menos.' },
  { id: '3', icon: 'Zap', title: 'Velocidad real', description: 'Implementaciones ágiles y sistemas de alto rendimiento.' },
  { id: '4', icon: 'Shield', title: 'Seguridad nativa', description: 'La protección de datos está en el ADN de cada desarrollo.' },
  { id: '5', icon: 'MessageSquare', title: 'Comunicación clara', description: 'Sin tecnicismos innecesarios. Hablamos de resultados.' },
  { id: '6', icon: 'LineChart', title: 'Decisiones con datos', description: 'Todo lo que hacemos se mide y se optimiza con información real.' },
];

export const plans: ImplementationPlan[] = [
  {
    id: 'start',
    name: 'AEGRIX Start',
    subtitle: 'Base digital profesional',
    items: ['Web corporativa básica', 'Seguridad inicial', 'Google Analytics', 'WhatsApp Business'],
    cta: 'Consultar Start'
  },
  {
    id: 'business',
    name: 'AEGRIX Business',
    subtitle: 'Crecimiento y orden',
    items: ['Web de alto rendimiento', 'SEO estratégico', 'Dashboard inicial', 'Protección de correos'],
    cta: 'Consultar Business'
  },
  {
    id: 'growth',
    name: 'AEGRIX Data Growth',
    subtitle: 'Inteligencia de datos',
    items: ['Analítica avanzada', 'Power BI Dashboards', 'Automatización de reportes', 'Capacitación'],
    cta: 'Consultar Data Growth'
  },
  {
    id: 'fortress',
    name: 'AEGRIX Fortress',
    subtitle: 'Ecosistema integral premium',
    items: ['Ciberseguridad total', 'Web + SEO + Conversión', 'BI + AI Automatización', 'Soporte Care'],
    featured: true,
    cta: 'Consultar Fortress'
  }
];

export const useCases: UseCase[] = [
  { 
    number: '01', 
    title: 'Información dispersa', 
    problem: 'Ventas en Excel, leads en WhatsApp y reportes manuales que toman días.', 
    solution: 'Dashboard centralizado que muestra KPIs en tiempo real.' 
  },
  { 
    number: '02', 
    title: 'Web invisible', 
    problem: 'Página lenta que no aparece en Google y no genera confianza.', 
    solution: 'Web con Next.js optimizada para velocidad y SEO.' 
  },
  { 
    number: '03', 
    title: 'Vulnerabilidad crítica', 
    problem: 'Accesos compartidos y falta de backups en información sensible.', 
    solution: 'Protocolo Aegrix Shield con MFA y copias automatizadas.' 
  },
  { 
    number: '04', 
    title: 'Tareas repetitivas', 
    problem: 'Equipo perdiendo horas en procesos administrativos manuales.', 
    solution: 'Automatización con IA para procesamiento de documentos.' 
  },
  { 
    number: '05', 
    title: 'Decisiones a ciegas', 
    problem: 'Inversión en marketing sin saber qué canal es rentable.', 
    solution: 'Embudo de conversión medible de extremo a extremo.' 
  },
];

export const faqItems: FAQItem[] = [
  { id: '1', question: '¿AEGRIX solo hace páginas web?', answer: 'No. Somos una firma tecnológica que une ciberseguridad, desarrollo web, analítica de datos e IA para crear sistemas empresariales completos.' },
  { id: '2', question: '¿Puedo contratar servicios por separado?', answer: 'Sí. Puedes iniciar con una necesidad puntual y escalar a un sistema integral por fases.' },
  { id: '3', question: '¿Qué es el Diagnóstico 360?', answer: 'Es nuestra auditoría inicial donde evaluamos riesgos, rendimiento web y madurez de datos para darte una hoja de ruta clara.' },
  { id: '4', question: '¿Trabajan con empresas fuera de Colombia?', answer: 'Sí. Atendemos empresas en toda Latinoamérica y clientes hispanos en Estados Unidos de forma remota.' },
  { id: '5', question: '¿Necesito ser experto en tecnología?', answer: 'En absoluto. Nuestro enfoque es eliminar la complejidad técnica para que tú te enfoques en el negocio.' },
  { id: '6', question: '¿Cómo garantizan la seguridad de mis datos?', answer: 'Implementamos estándares de encriptación, protocolos de acceso restringido y backups redundantes desde el primer día.' },
  { id: '7', question: '¿Cuánto tiempo toma una implementación?', answer: 'Depende del alcance, pero una landing de alto rendimiento puede estar lista en 2 semanas, mientras que un sistema de datos toma de 4 a 8 semanas.' },
  { id: '8', question: '¿Ofrecen mantenimiento post-entrega?', answer: 'Sí, a través de AEGRIX Care aseguramos que tu infraestructura se mantenga actualizada, segura y optimizada.' },
];

export const diagnosticChecklist: string[] = [
  'Revisión de seguridad digital',
  'Auditoría de accesos y MFA',
  'Protección de correos corporativos',
  'Estado de backups críticos',
  'Velocidad y rendimiento web (Core Web Vitals)',
  'Optimización SEO y visibilidad',
  'Seguridad SSL y protocolos web',
  'Tasa de conversión de formularios',
  'Calidad de datos actuales (Excel, CRM)',
  'Identificación de KPIs estratégicos',
  'Oportunidades de automatización IA',
  'Recomendaciones de arquitectura Cloud',
  'Plan de mitigación de riesgos',
  'Hoja de ruta tecnológica a 12 meses'
];

export const conversionFunnel: FunnelStep[] = [
  { label: 'Visitante', metric: '100%', width: '100%', bg: 'bg-aegrix-surface/40' },
  { label: 'Confianza', metric: '98/100', width: '85%', bg: 'bg-aegrix-surface/60' },
  { label: 'Acción', metric: 'Activo', width: '65%', bg: 'bg-aegrix-surface/80' },
  { label: 'Lead', metric: 'Capturado', width: '45%', bg: 'bg-aegrix-cyan/10' },
  { label: 'Cierre', metric: 'WhatsApp ✓', width: '30%', bg: 'bg-aegrix-cyan/20' },
];

export const webBenefits: string[] = [
  'Velocidad de carga menor a 1.2s',
  'Arquitectura segura con Next.js',
  'Optimización Core Web Vitals',
  'Diseño orientado a conversión',
  'Integración con WhatsApp y CRM',
  'SEO semántico y estructurado',
  'Adaptabilidad móvil total',
  'Formularios con validación',
  'Seguridad contra inyecciones',
  'Certificados SSL incluidos',
  'Dashboard de métricas web',
  'Escalabilidad en la nube',
  'Mantenimiento proactivo'
];
