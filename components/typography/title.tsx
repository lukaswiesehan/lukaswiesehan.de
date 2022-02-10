import react from 'react'

type TitleProps = {
  children: react.ReactNode,
  className: string
}

export const Title = ({children, className}: TitleProps) => {
  return (
    <h1 className={`text-slate-900 font-black text-3xl leading-tight sm:text-4xl sm:leading-none lg:text-[2.5rem] 2xl:text-[2.75rem] ${className}`}>
      {children}
    </h1>
  )
}