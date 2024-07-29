import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons'
import { BellIcon, Share2Icon } from 'lucide-react'

import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'

const features = [
  {
    Icon: FileTextIcon,
    name: 'Save your files',
    description: 'We automatically save your files as you type.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <img
        src='https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif'
        alt='loading...'
      />
    ),
  },
  {
    Icon: BellIcon,
    name: 'Notifications',
    description: 'Get notified when something happens.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <img
        src='https://www.icegif.com/wp-content/uploads/2023/03/icegif-47.gif'
        alt='loading...'
      />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Integrations',
    description: 'Supports 100+ integrations and counting.',
    href: '#',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: <img src='https://i.gifer.com/GmUB.gif' alt='loading...' />,
  },
  {
    Icon: CalendarIcon,
    name: 'Calendar',
    description: 'Use the calendar to filter your files by date.',
    className: 'col-span-3 lg:col-span-1',
    href: '#',
    cta: 'Learn more',
    background: (
      <img
        src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-93.gif'
        alt='loading...'
      />
    ),
  },
]

export function Projects() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
