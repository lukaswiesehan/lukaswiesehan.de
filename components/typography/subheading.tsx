import react from 'react'

type SubheadingProps = {
  children: react.ReactNode
}

export const Subheading = ({children}: SubheadingProps) => {
  return (
    <h2 className="mb-4 text-slate-500 font-bold leading-tight sm:text-lg sm:leading-none">
      {children}
    </h2>
  )
}