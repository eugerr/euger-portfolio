import { ChevronsDown, MouseIcon } from 'lucide-react'
import { ReactNode, useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import { CustomDock } from './components/dock'
import { Experience, timelineData } from './components/experience'
import Footer from './components/footer'
import BoxReveal from './components/magicui/box-reveal'
import TextRevealByWord from './components/magicui/text-reveal'
import { Nav } from './components/nav'
import { Projects } from './components/projects'
import { ThemeProvider } from './components/theme-provider'
import { cn } from './lib/utils'
import { isMobile } from 'react-device-detect'

export default function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0)

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset
    setScrollYPosition(newScrollYPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <ScrollDownIcon />
        {scrollYPosition !== 0 && <Nav />}
        <main className='max-w-screen-md mx-auto px-2 space-y-10'>
          <section>
            <TextRevealByWord text="I'm Euger Bonete Jr. a web developer based in the Philippines. I mainly work with javascript / typescript and frameworks like NextJS." />
          </section>

          <SectionTitle>projects</SectionTitle>
          <Section>
            <Projects />
          </Section>

          <SectionTitle className='mt-10'>experience</SectionTitle>
          <Section>
            <Experience items={timelineData} />
          </Section>
        </main>
        <Footer />

        {/* others */}
        {!isMobile && <AnimatedCursor outerSize={10} color='255, 165, 0' />}
        <CustomDock />
        {/* others */}
      </ThemeProvider>
    </>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
}

function Section({ children, className }: SectionProps) {
  return (
    <BoxReveal duration={0.5}>
      <section className={cn(className)}>{children}</section>
    </BoxReveal>
  )
}
function SectionTitle({ children, className }: SectionProps) {
  return (
    <BoxReveal duration={0.5}>
      <p className={cn(className, 'text-4xl font-semibold')}>
        <span className='text-primary'>//</span> {children}
      </p>
    </BoxReveal>
  )
}

function ScrollDownIcon() {
  return (
    <span className='z-10 text-center absolute inset-0 top-2 flex items-center flex-col'>
      <MouseIcon />
      <ChevronsDown className='animate-bounce' />
      scroll down
    </span>
  )
}
