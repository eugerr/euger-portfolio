import { CircleArrowDown } from 'lucide-react'
import BoxReveal from './magicui/box-reveal'
import { Button } from './ui/button'

export function Nav() {
  return (
    <header className='py-2 px-2 md:px-4 fixed top-0 flex items-center gap-2 w-full bg-background z-20 border-b'>
      <div className='flex-1'>
        <BoxReveal duration={0.5}>
          <a href='/' className='text-2xl font-semibold'>
            Euger<span className='text-primary'>.</span>
          </a>
        </BoxReveal>
      </div>
      <BoxReveal duration={0.5}>
        <Button
          className='mr-1'
          variant='expandIcon'
          Icon={CircleArrowDown}
          iconPlacement='right'
        >
          Download CV
        </Button>
      </BoxReveal>
      <BoxReveal duration={0.5}>
        <Button variant='outline'>Lets Talk.</Button>
      </BoxReveal>
    </header>
  )
}
