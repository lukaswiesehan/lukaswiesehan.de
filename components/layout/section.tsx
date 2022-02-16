import react from 'react'

import {Background} from '@components/layout/background'

type SectionProps = {
  backgroundHeight: 'full' | 'half'
  children: react.ReactNode
  className: string | null
}

export const Section = ({backgroundHeight, children, className}: SectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <Background height={backgroundHeight} />
      <div
        className={`relative mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-y-8 gap-x-0.5 border-l-2 border-r border-transparent px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-0 2xl:max-w-screen-xl ${className}`}
      >
        {children}
      </div>
    </section>
  )
}
