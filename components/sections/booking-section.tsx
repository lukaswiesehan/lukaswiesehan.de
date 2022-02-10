import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {BookingForm} from '@components/functional/booking-form'

export const BookingSection = () => {
  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-orange-to-blue.jpg" className="col-span-1 md:col-span-2 lg:col-span-4">
        <div className="grid grid-cols-1 gap-y-16 gap-x-0.5 lg:grid-cols-2">
          <div className="lg:max-w-md">
            <FadeIn direction="up">
              <Subheading>Lass&apos; Deine Idee nicht ausbremsen</Subheading>
              <Heading className="max-w-md">Buche Dein Gespräch</Heading>
            </FadeIn>
            <FadeIn direction="up">
              <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
                Erzähl&apos; mir ganz unverbindlich von Deinem Produkt und Deinen Zielen und{' '}
                <b className="text-slate-900">erfahre direkt, wie Deine Lösung aussehen könnte</b>.
              </HeadingBody>
            </FadeIn>
          </div>
          <BookingForm />
        </div>
      </Card>
    </Section>
  )
}
