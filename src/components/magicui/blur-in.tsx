'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'

interface BlurIntProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.h1
      initial='hidden'
      animate='visible'
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        'font-display text-center text-4xl font-semibold tracking-wide drop-shadow-sm md:text-4xl md:leading-tight'
      )}
    >
      <Balancer>{word}</Balancer>
    </motion.h1>
  )
}

export default BlurIn
