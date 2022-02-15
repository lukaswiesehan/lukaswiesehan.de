import {Container} from '@components/container'
import {HeroSection} from '@components/sections/hero-section'
import {HellIslandSection} from '@components/sections/hell-island-section'
import {AboutMeSection} from '@components/sections/about-me-section'
import {ProcessSection} from '@components/sections/process-section'
import {HeavenIslandSection} from '@components/sections/heaven-island-section'
import {TestimonialsSection} from '@components/sections/testimonials-section'
import {ClientsSection} from '@components/sections/clients-section'
import {FAQSection} from '@components/sections/faq-section'
import {ContactSection} from '@components/sections/contact-section'

// Content
import {getTestimonials} from '@lib/content/get-testimonials'
import {getClientLogos} from '@lib/content/get-client-logos'
import {getFAQs} from '@lib/content/get-faqs'

// Content Types
import {Testimonial} from '@content/testimonials'
import {ClientLogo} from '@lib/types/client-logo'
import {FAQ} from '@content/faqs'

export const getStaticProps = async () => {
  const testimonials = getTestimonials()
  const clientLogos = getClientLogos()
  const faqs = getFAQs()

  return {
    props: {testimonials, clientLogos, faqs}
  }
}

type IndexProps = {
  testimonials: Testimonial[]
  clientLogos: ClientLogo[]
  faqs: FAQ[]
}

export const Index = ({testimonials, clientLogos, faqs}: IndexProps) => {
  return (
    <Container>
      <HeroSection />
      <HellIslandSection />
      <AboutMeSection />
      <ProcessSection />
      <HeavenIslandSection />
      <TestimonialsSection testimonials={testimonials} />
      <ClientsSection clientLogos={clientLogos} />
      <FAQSection faqs={faqs} />
      <ContactSection />
    </Container>
  )
}

export default Index
