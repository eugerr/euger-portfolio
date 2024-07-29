'use client'

import { FC, ReactNode, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { cn } from '@/lib/utils'
import Balancer from 'react-wrap-balancer'

interface TextRevealByWordProps {
  text: string
  className?: string
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  const words = text.split(' ')

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[200vh]', className)}>
      <div
        className={
          'sticky top-0 mx-auto flex h-[50%] items-center bg-transparent'
        }
      >
        <p
          ref={targetRef}
          className={
            'flex flex-wrap text-xl font-bold text-black/20 dark:text-white/20 md:text-4xl lg:text-6xl'
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            const targetWords = ['javascript', 'typescript', 'NextJS.']
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                <Balancer>
                  <p
                    className={cn(
                      targetWords.includes(word) &&
                        'underline decoration-primary text-primary-foreground'
                    )}
                  >
                    {word}
                  </p>
                </Balancer>
              </Word>
            )
          })}
        </p>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: any
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className='xl:lg-3 relative mx-1 lg:mx-2.5'>
      <span className={'absolute opacity-30'}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={'text-black dark:text-white'}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default TextRevealByWord
