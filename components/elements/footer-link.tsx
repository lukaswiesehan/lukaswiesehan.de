import Link from 'next/link'

type FooterLink = {
  href: string
  text: string
}

export const FooterLink = ({href, text}: FooterLink) => {
  return (
    <Link href={href}>
      <a className="relative text-slate-500 hover:text-slate-600">{text}</a>
    </Link>
  )
}
