import { CustomDock } from './components/dock'
import TextRevealByWord from './components/magicui/text-reveal'
import AnimatedCursor from 'react-animated-cursor'
import { ChevronsDown, MouseIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Nav } from './components/nav'

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

  // Now the vertical position is available with `scrollYPosition`
  return (
    <>
      <ScrollDownIcon />
      {scrollYPosition !== 0 && <Nav />}
      <main className='max-w-screen-md mx-auto px-2'>
        <section>
          <TextRevealByWord text="I'm Euger Bonete Jr. a web developer based in the Philippines. I mainly work with javascript / typescript and frameworks like NextJS." />
        </section>
      </main>
      <AnimatedCursor outerSize={10} color='255, 165, 0' />
      <CustomDock />
    </>
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
