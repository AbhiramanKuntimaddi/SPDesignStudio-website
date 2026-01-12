export interface Testimonial {
  name: string
  title: string
  testimonial: string
  imageUrl: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Emily Roberts',
    title: 'CEO, Luxe Interiors',
    testimonial:
      'SP Design Studio transformed our workspace with exquisite design and attention to detail. Their vision turned our environment into a source of inspiration every day.',
    imageUrl: '/images/intro-left.jpg',
  },
  {
    name: 'Marcus Lee',
    title: 'Founder, Urban Living',
    testimonial:
      'Their ability to blend artistic creativity with practical functionality is unmatched. Our new office is not only beautiful but incredibly efficient.',
    imageUrl: '/images/intro-left.jpg',
  },
  {
    name: 'Sophia Martinez',
    title: 'Creative Director, Modern Space',
    testimonial:
      'Collaborating with SP Design Studio was a delightful experience. Their refined approach and personalized service truly reflect who we are as a brand.',
    imageUrl: '/images/intro-left.jpg',
  },
  {
    name: 'James Carter',
    title: 'Architect, Urban Build Co.',
    testimonial:
      'The team at SP Design Studio exceeded our expectations. They perfectly captured the essence of our brand and brought it to life with their visionary approach.',
    imageUrl: '/images/intro-left.jpg',
  },
]
