export interface ServiceItem {
  title: string
  description: string
  projects: number
  backgroundImage: string
}

export const services: ServiceItem[] = [
  {
    title: 'Residential Spaces',
    description:
      'Warm, expressive interiors designed to feel like home—every detail curated for your lifestyle.',
    projects: 120,
    backgroundImage: '/images/grid-top-left.jpg',
  },
  {
    title: 'Commercial Spaces',
    description: 'Elegant, functional workplaces that reflect your brand and inspire productivity.',
    projects: 90,
    backgroundImage: '/images/grid-top-right.jpg',
  },
  {
    title: 'End-to-End Solutions',
    description:
      'Holistic design experiences—from vision to execution—with every touchpoint considered.',
    projects: 30,
    backgroundImage: '/images/grid-bottom-left.jpg',
  },
  {
    title: 'Renovation Works',
    description:
      'Breathing new life into spaces with intentional design, craftsmanship, and modern sensibility.',
    projects: 75,
    backgroundImage: '/images/grid-bottom-right.jpg',
  },
]
