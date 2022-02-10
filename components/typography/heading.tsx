import {ReactNode} from 'react'

type HeadingProps = {
  children: ReactNode
  className?: string
}

export const Heading = ({children, className}: HeadingProps) => {
  return (
    <h3
      className={`mb-4 text-2xl font-black leading-tight text-slate-900 sm:text-3xl sm:leading-none lg:mb-8 ${className}`}
    >
      {children}
    </h3>
  )
}
