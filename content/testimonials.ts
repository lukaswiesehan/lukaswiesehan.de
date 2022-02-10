export type Testimonial = {
  title: string
  online: boolean
  headline: string
  body: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    title: 'Testsealabs',
    online: true,
    headline: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: '/images/scenes/testimonials-testsealabs.png',
  },
  {
    title: 'Moin Skydive',
    online: true,
    headline: 'Kreative Lösungen in kürzester Zeit',
    body: 'Lukas hat unsere Problemstellung schnell durchdrungen und eine optimale Lösung für unsere Website geliefert. Dabei war uns insbesondere eine schnelle und zuverlässige Umsetzung wichtig. Die neue Website überraschte uns nicht nur durch das kreative Design, sondern auch durch die kinderleichte Kalender- und Zahlungsintegration für unsere Terminbuchung.',
    image: '/images/scenes/testimonials-moinskydive.png',
  },
  {
    title: 'Scoo Brewery',
    online: true,
    headline: 'Unkomplizierte und konstruktive Zusammenarbeit',
    body: 'Unser wichtigstes Ziel war die Einbindung unserer Designsprache in die Website, ohne dadurch die Funktion und Customer Experience einzuschränken. Das hat Lukas von Anfang an verstanden und wusste es umzusetzen. Mit seiner unkomplizierten und proaktiven Art hat er eine Website entwickelt, die uns dazu noch einen einfachen Umgang mit den Integrationen für die Merchant-Map und die Shopfunktion ermöglicht.',
    image: '/images/scenes/testimonials-thescoo.png',
  },
]
