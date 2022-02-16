import Image from 'next/image'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Title} from '@components/typography/title'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'

export const CookiesHeadingSection = () => {
  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-blue-to-green.jpg" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <div className="mt-24 lg:mt-0 lg:max-w-lg">
          <FadeIn direction="up">
            <Subheading>Damit Du nicht getracked wirst</Subheading>
            <Title className="max-w-lg">Hier gibt&apos;s keine Cookies</Title>
          </FadeIn>
          <FadeIn direction="up">
            <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
              Ich bin ein Freund davon, Cookies und lokale Daten nur zu verwenden, wenn es zur Bereitstellung besonderer Funktionen unbedingt nötig ist.
            </HeadingBody>
          </FadeIn>
        </div>
      </Card>
      <FadeIn direction="up" className="relative order-1 -mb-32 h-64 lg:order-2 lg:mb-0 lg:mr-4 lg:-ml-8 lg:h-auto xl:ml-0 xl:-mr-16">
        <Image
          src="/images/scenes/cookies.png"
          alt="Cookies Scene"
          placeholder="blur"
          blurDataURL="/images/scenes/cookies.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
