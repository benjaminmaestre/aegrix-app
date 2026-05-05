export interface NavItem {
  label: string
  href: string
}

export interface ServiceCard {
  id: string
  icon: string         // nombre del icono lucide-react
  title: string
  description: string
  items: string[]
  color?: 'cyan' | 'blue' | 'green' | 'purple'
}

export interface SectorCard {
  id: string
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface DifferentiatorCard {
  id: string
  icon: string
  title: string
  description: string
}

export interface ImplementationPlan {
  id: string
  name: string
  subtitle: string
  items: string[]
  featured?: boolean
  cta: string
}

export interface UseCase {
  number: string
  title: string
  problem: string
  solution: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface CommandMetric {
  label: string
  value: string
  status: 'active' | 'warning' | 'info'
  layer: string
}

export interface ProblemCard {
  icon: string
  title: string
  description: string
}

export interface PlatformBlock {
  id: string
  label: string
  title: string
  description: string
  cta: string
}

export interface FunnelStep {
  label: string
  metric: string
  width: string
  bg: string
}
