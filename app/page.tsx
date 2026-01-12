'use client'

import { useRef, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useInView } from 'framer-motion'
import Header from '@/components/Header/Header'
import Hero from '@/components/Index/Hero'
import IntroductionSection from '@/components/Index/IntroductionSection'
import Services from '@/components/Index/Services'
import About from '@/components/Index/About'
import TestimonySection from '@/components/Index/TestimonySection'
import ContactUs from '@/components/Index/ContactUs'
import Footer from '@/components/Footer/Footer'
import BrandSection from '@/components/Index/BrandSection'

// Custom hook to check a media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    // Set initial match
    setMatches(media.matches)

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

export default function Home() {
  const heroRef = useRef(null)

  // Detect mobile screen
  const isMobile = useMediaQuery('(max-width: 640px)')
  // Safer observer margin to reduce false triggers
  const observerMargin = isMobile ? '-60% 0px -20% 0px' : '-40% 0px -20% 0px'
  // Watch when Hero is in view
  const isHeroInView = useInView(heroRef, { margin: observerMargin })

  // Get the current path from Next's navigation hook
  const pathname = usePathname()

  return (
    <div>
      {/* Pass both showHeader and currentPath props into the Header */}
      <Header showHeader={isHeroInView} currentPath={pathname} />

      {/* Wrapper with smooth scroll enabled */}
      <div className="scroll-smooth">
        <div ref={heroRef} style={{ minHeight: '100vh' }}>
          <Hero />
        </div>
        <IntroductionSection />
        <Services />
        <BrandSection />
        <About />
        <TestimonySection />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}
