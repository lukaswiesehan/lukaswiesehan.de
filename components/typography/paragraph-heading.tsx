import {ReactNode} from 'react'

type ParagraphHeadingProps = {
  text: string | ReactNode
  className: string
}

export const ParagraphHeading = ({text, className}: ParagraphHeadingProps) => {
  return (
    <div className="flex text-lg font-black text-slate-900">
      <div className={`-ml-0.5 mt-0.5 h-6 border-l-2 ${className}`} />
      <h4 className="pl-4 pr-3">{text}</h4>
    </div>
  )
}
