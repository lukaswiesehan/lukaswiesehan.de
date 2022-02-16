import {Container} from '@components/container'
import {BookingSection} from '@components/sections/booking-section'
import {ContactOptionsSection} from '@components/sections/contact-option-section'

export const Contact = () => {
  return (
    <Container
      title="Gespräch buchen - Lukas Wiesehan"
      description="Erzähl' mir ganz unverbindlich von Deinem Produkt und Deinen Zielen und erfahre direkt, wie Deine Lösung aussehen könnte."
    >
      <BookingSection />
      <ContactOptionsSection />
    </Container>
  )
}

export default Contact
