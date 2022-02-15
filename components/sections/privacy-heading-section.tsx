import Image from 'next/image'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'

export const PrivacyHeadingSection = () => {
  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-blue-to-green.jpg" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <div className="mt-24 lg:mt-0 lg:max-w-lg">
          <FadeIn direction="up">
            <Subheading>Deine Privatsphäre im Fokus</Subheading>
            <Heading className="max-w-md">Datenschutzerklärung</Heading>
          </FadeIn>
          <FadeIn direction="up">
            <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
              Mit der folgenden Datenschutzerklärung möchte ich Dich darüber aufklären, welche Arten Deiner personenbezogenen Daten (nachfolgend auch kurz
              als "Daten“ bezeichnet) ich zu welchen Zwecken und in welchem Umfang verarbeite.
            </HeadingBody>
          </FadeIn>
        </div>
      </Card>
      <FadeIn direction="up" className="relative order-1 -mb-32 h-64 lg:order-2 lg:mb-0 lg:mr-4 lg:-ml-8 lg:h-auto xl:-mr-24">
        <Image
          src="/images/scenes/legal.png"
          placeholder="blur"
          blurDataURL="/images/scenes/legal.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
