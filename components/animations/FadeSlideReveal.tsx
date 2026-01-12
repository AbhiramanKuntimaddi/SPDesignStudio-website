import React from 'react'
import { motion } from 'framer-motion'

interface FadeSlideRevealProps {
  text: string
  animate?: boolean
}

const FadeSlideReveal = ({ text, animate }: FadeSlideRevealProps) => {
  const tokens = text.split(/(\s+)/g)

  return (
    <motion.div initial="hidden" animate={animate ? 'visible' : 'hidden'}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return <span key={i}>{token}</span>
        }
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: i * 0.09, duration: 0.5 }}
          >
            {token}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

export default FadeSlideReveal;