import react from 'react'

type HeadingBodyProps = {
  children: react.ReactNode
  className?: string
}

export const HeadingBody = ({children, className}: HeadingBodyProps) => {
  return <p className={`leading-relaxed md:text-lg ${className}`}>{children}</p>
}
