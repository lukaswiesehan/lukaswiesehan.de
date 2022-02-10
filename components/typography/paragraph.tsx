import react from 'react'

type ParagraphProps = {
  children: react.ReactNode
}

export const Paragraph = ({children}: ParagraphProps) => {
  return (
    <p className="hyphens px-4 mt-4 max-w-xl text-slate-500">{children}</p>
  )
}