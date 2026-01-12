'use client'

import React, { useMemo, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  enableBlur?: boolean
  baseOpacity?: number
  baseRotation?: number
  blurStrength?: number
  containerClassName?: string
  textClassName?: string
}

// Define variants for each word. Here we combine an upward offset with fade+blur removal.
const wordVariants = (enableBlur: boolean, blurStrength: number, baseOpacity: number) => ({
  hidden: { opacity: baseOpacity, y: 20, filter: enableBlur ? `blur(${blurStrength}px)` : 'none' },
  visible: {
    opacity: 1,
    y: 0,
    filter: enableBlur ? 'blur(0px)' : 'none',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
})

// Define variants for sentences. We add a twist with rotation to hint at the original effect.
const sentenceVariants = (baseRotation: number, baseOpacity: number) => ({
  hidden: { opacity: baseOpacity, rotate: baseRotation },
  visible: { opacity: 1, rotate: 0, transition: { staggerChildren: 0.05 } },
})

// A container variant to stagger each sentence for a sequential reveal.
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
}) => {
  const sentences = useMemo(() => {
    const text = typeof children === 'string' ? children : ''
    // Split text into sentences (using a regex that splits after punctuation)
    return text.split(/(?<=[.!?])\s+/).map((sentence, sentenceIndex) => {
      // Split each sentence into words (keeping spaces intact)
      const words = sentence.split(/(\s+)/).map((word, wordIndex) => {
        if (word.match(/^\s+$/)) return word
        return (
          <motion.span
            key={wordIndex}
            className="inline-block"
            variants={wordVariants(enableBlur, blurStrength, baseOpacity)}
          >
            {word}
          </motion.span>
        )
      })
      return (
        <motion.p
          key={sentenceIndex}
          className={`mb-4 ${textClassName}`}
          variants={sentenceVariants(baseRotation, baseOpacity)}
        >
          {words}
        </motion.p>
      )
    })
  }, [children, baseOpacity, baseRotation, blurStrength, enableBlur, textClassName])

  return (
    <motion.div
      className={`my-5 ${containerClassName}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {sentences}
    </motion.div>
  )
}

export default ScrollReveal
