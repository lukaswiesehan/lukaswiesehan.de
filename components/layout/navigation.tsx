import {motion, useCycle} from 'framer-motion'
import {useRouter} from 'next/router'
import {trackGoal} from 'fathom-client'

import {Logo} from '@components/elements/logo'
import {NavButton} from '@components/elements/nav-button'
import {NavLink} from '@components/elements/nav-link'
import {Button} from '@components/elements/button'
import {FooterLink} from '@components/elements/footer-link'

export const Navigation = () => {
  const router = useRouter()
  const [open, toggleOpen] = useCycle(false, true)

  const divVariants = {
    open: {opacity: 1, display: 'block'},
    closed: {
      opacity: 0,
      transition: {delay: 0.3},
      transitionEnd: {display: 'none'},
    },
  }

  const ulVariants = {
    open: {transition: {staggerChildren: 0.1, delayChildren: 0.1}},
    closed: {transition: {staggerChildren: 0.05, staggerDirection: -1}},
  }

  const liVariants = {
    open: {y: 0, opacity: 1, scale: 1},
    closed: {y: 24, opacity: 0, scale: 0.9, transition: {ease: 'backIn'}},
  }

  const clickCTA = () => {
    trackGoal('DNUD1HT9', 0)
    router.push('/contact')
  }

  return (
    <nav className="fixed z-40 w-full bg-white/70 backdrop-blur-lg backdrop-filter">
      <div className="mx-auto flex h-16 w-full max-w-screen-lg items-center justify-between border-x-2 border-transparent px-8 md:h-20 xl:px-4 2xl:max-w-screen-xl">
        <div className="relative z-50">
          <Logo />
        </div>
        <ul className="hidden items-center space-x-8 md:flex lg:space-x-16">
          <li>
            <NavLink href="/" text="Start" />
          </li>
          <li>
            <NavLink href="/work" text="Work" />
          </li>
          <li>
            <NavLink href="/blog" text="Blog" />
          </li>
          <li>
            <Button
              type="primary"
              text="Gespräch vereinbaren"
              action={clickCTA}
              loading={false}
            />
          </li>
        </ul>
        <motion.div
          initial={false}
          animate={open ? 'open' : 'closed'}
          className="flex items-center md:hidden"
        >
          <NavButton open={open} toggleOpen={toggleOpen} />
          <motion.div
            variants={divVariants}
            className="absolute left-0 top-0 z-40 h-screen w-screen bg-white/70 pt-16 backdrop-blur-lg backdrop-filter"
          >
            <div className="flex h-full w-full flex-col justify-center">
              <motion.ul
                variants={ulVariants}
                className="flex flex-col items-center space-y-8"
              >
                <motion.li variants={liVariants} className="space-x-8">
                  <NavLink href="/" text="Start" />
                  <NavLink href="/work" text="Work" />
                  <NavLink href="/blog" text="Blog" />
                </motion.li>
                <motion.li variants={liVariants}>
                  <Button
                    type="primary"
                    text="Gespräch vereinbaren"
                    action={clickCTA}
                    loading={false}
                  />
                </motion.li>
                <motion.li
                  variants={liVariants}
                  className="flex w-52 flex-wrap justify-center pt-32"
                >
                  <span className="px-2 py-1">
                    <FooterLink href="/legal" text="Impressum" />
                  </span>
                  <span className="px-2 py-1">
                    <FooterLink href="/privacy" text="Datenschutz" />
                  </span>
                  <span className="px-2 py-1">
                    <FooterLink href="/cookies" text="Cookies" />
                  </span>
                  <span className="px-2 py-1">
                    <FooterLink href="/contact" text="Kontakt" />
                  </span>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  )
}
