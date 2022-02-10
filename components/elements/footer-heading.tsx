type FooterHeadingProps = {
  text: string
}

export const FooterHeading = ({text}: FooterHeadingProps) => {
  return <h4 className="font-bold text-slate-500">{text}</h4>
}
