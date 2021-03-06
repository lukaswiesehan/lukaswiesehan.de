import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="mt-16 md:mt-24 mb-24 lg:mb-16 text-sm text-gray-500 dark:text-cool-gray-400">
      <div className="flex items-center space-x-4 mb-4">
        <p className="flex-shrink-0">&copy; Lukas Wiesehan {currentYear}</p>
        <hr className="flex-grow h-0.5 bg-warm-gray-200 dark:bg-cool-gray-600 border-transparent"/>
      </div>
      <div className="sm:flex sm:justify-between">
        <ul className="flex space-x-4">
          <li><Link href="/legal">Impressum</Link></li>
          <li><Link href="/privacy">Datenschutz</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
        <ul className="flex space-x-4 mt-4 sm:mt-0">
          <li><Link href="https://instagram.com/lukaswiesehan"><a target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/><span className="inline-block h-0 w-0 overflow-hidden">Instagram</span></a></Link></li>
          <li><Link href="https://www.linkedin.com/in/lukas-wiesehan-74931b1bb/"><a target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/><span className="inline-block h-0 w-0 overflow-hidden">LinkedIn</span></a></Link></li>
          <li><Link href="https://github.com/lukaswiesehan"><a target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/><span className="inline-block h-0 w-0 overflow-hidden">GitHub</span></a></Link></li>
        </ul>
      </div>
    </footer>
  )
}