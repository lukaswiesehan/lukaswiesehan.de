import Image from 'next/image'
import {useRouter} from 'next/router'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {CTA} from '@components/elements/cta'

export const ContactSection = () => {
  const router = useRouter()

  const clickCTA = () => {
    trackGoal('HKNL7AT5', 0)
    router.push('/contact')
  }

  return (
    <Section backgroundHeight="full" className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40">
      <div className="order-1 hidden 2xl:block" />
      <Card
        background="/images/backgrounds/background-blue-to-red.jpg"
        className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3 2xl:order-2 2xl:col-span-2"
      >
        <div className="mt-24 lg:mt-0 lg:max-w-lg">
          <FadeIn direction="up">
            <Subheading>Lass&apos; Deine Idee nicht ausbremsen</Subheading>
            <Heading className="max-w-md">Sichere Dir jetzt Dein Gespräch</Heading>
          </FadeIn>
          <FadeIn direction="up">
            <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
              Erzähl&apos; mir ganz unverbindlich von Deinem Produkt und Deinen Zielen und{' '}
              <b className="text-slate-900">erfahre direkt, wie Deine Lösung aussehen könnte</b>.
            </HeadingBody>
            <CTA action={clickCTA} />
          </FadeIn>
        </div>
      </Card>
      <FadeIn direction="up" className="relative order-1 -mb-32 h-64 lg:order-2 lg:mb-0 lg:mr-4 lg:-ml-8 lg:h-auto xl:ml-0 xl:-mr-16 2xl:mr-8 2xl:-ml-8">
        <Image
          src="/images/scenes/contact.png"
          placeholder="blur"
          blurDataURL="/images/scenes/contact.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
