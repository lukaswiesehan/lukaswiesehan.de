import Link from 'next/link'
import {useRouter} from 'next/router'

type NavLinkProps = {
  href: string
  text: string
}

export const NavLink = ({href, text}: NavLinkProps) => {
  const router = useRouter()

  return (
    <Link href={href}>
      <a className="relative font-black text-slate-900 hover:text-slate-900/70">
        {text}
        {router.pathname.split('/')[1] == href.replace('/', '') && (
          <div className="absolute flex w-full justify-center">
            <span className="mt-1 block h-1 w-1 rounded-full bg-indigo-300" />
          </div>
        )}
      </a>
    </Link>
  )
}
