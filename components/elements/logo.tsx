import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <a className="group relative block overflow-visible p-2 text-slate-900 hover:text-slate-700">
        <svg className="relative h-6 fill-current sm:h-8" viewBox="0 0 363 212" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.821 19.5394C44.1779 8.74814 55.0428 0 66.0885 0H110.088L77.656 148.5H161.656L148 211.026H0.000244141L41.821 19.5394Z" />
          <path d="M209.821 19.5394H273.821L236.268 191.486C233.911 202.278 223.046 211.026 212 211.026H168L209.821 19.5394Z" />
          <path d="M362.088 0H298.088L256.268 191.486H300.268C311.313 191.486 322.178 182.738 324.535 171.947L362.088 0Z" />
          <path d="M130.088 0H194.088L165.923 128.96H101.923L130.088 0Z" />
        </svg>
      </a>
    </Link>
  )
}
