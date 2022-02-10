import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a className="inline-block bg-gradient-to-br from-teal-400 via-slate-400 to-violet-400 bg-clip-text text-lg font-black text-transparent hover:from-teal-500 hover:via-slate-500 hover:to-violet-500">
        lukaswiesehan.de
      </a>
    </Link>
  )
}
