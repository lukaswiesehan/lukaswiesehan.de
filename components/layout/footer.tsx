import {Background} from '@components/layout/background'
import {Logo} from '@components/elements/logo'
import {FooterHeading} from '@components/elements/footer-heading'
import {FooterLink} from '@components/elements/footer-link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative lg:pt-28 xl:pt-32 2xl:pt-40">
      <Background height="full" />
      <div className="bg-slate-100 text-sm">
        <div className="mx-auto grid w-full max-w-screen-lg grid-cols-1 gap-y-8 py-12 px-4 md:grid-cols-2 md:py-16 lg:grid-cols-4 lg:py-20 lg:px-0 xl:py-28 2xl:max-w-screen-xl">
          <div className="px-4 lg:flex lg:flex-col lg:justify-between">
            <Logo className="text-slate-400 hover:text-slate-500" />
            <p>&copy; Lukas Wiesehan {currentYear}</p>
          </div>
          <div className="hidden lg:block" />
          <div className="px-4">
            <FooterHeading text="Navigation" />
            <ul className="mt-4 space-y-1">
              <li>
                <FooterLink href="/" text="Start" />
              </li>
              <li>
                <FooterLink href="/work" text="Work" />
              </li>
              <li>
                <FooterLink href="/blog" text="Blog" />
              </li>
            </ul>
          </div>
          <div className="hidden md:block lg:hidden" />
          <div className="px-4">
            <FooterHeading text="Rechtliches" />
            <ul className="mt-4 space-y-1">
              <li>
                <FooterLink href="/legal" text="Impressum" />
              </li>
              <li>
                <FooterLink href="/privacy" text="Datenschutz" />
              </li>
              <li>
                <FooterLink href="/cookies" text="Cookies" />
              </li>
              <li>
                <FooterLink href="/contact" text="Kontakt" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
