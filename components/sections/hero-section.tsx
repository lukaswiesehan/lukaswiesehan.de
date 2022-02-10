import Image from 'next/image'
import {useRouter} from 'next/router'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Title} from '@components/typography/title'
import {HeadingBody} from '@components/typography/heading-body'
import {CTA} from '@components/elements/cta'

export const HeroSection = () => {
  const breakpoint = useBreakpoint()
  const router = useRouter()

  const clickCTA = () => {
    trackGoal('8JVPYZAP', 0)
    router.push('/contact')
  }

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card
        background="/images/backgrounds/background-green-to-violet.jpg"
        className="pb-48 md:col-span-2 md:pb-48 lg:col-span-3 lg:pb-16"
      >
        <FadeIn direction="up">
          <Title className="md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl">
            Next-Level Produktwebsite durch Web-Technologien von morgen.
          </Title>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <HeadingBody className="mt-12 md:max-w-2xl lg:mt-16 lg:max-w-xl lg:text-xl xl:max-w-2xl xl:pr-12 2xl:pr-0">
            Ein Online-Erlebnis, das{' '}
            <b className="text-slate-900">Dein Produkt</b> ins Rampenlicht
            stellt. Keine Kompromisse zwischen Design und Funktion dank
            individueller Konzeption und Entwicklung – auch ohne Agenturbudget.
          </HeadingBody>
          <CTA action={clickCTA} />
        </FadeIn>
      </Card>
      <FadeIn
        direction="up"
        delay={breakpoint.md ? 0.2 : 0}
        className="relative -mt-40 h-64 sm:h-80 md:col-span-2 md:h-96 lg:col-span-1 lg:my-0 lg:-ml-32 lg:h-full xl:-mr-24 2xl:-ml-48"
      >
        <Image
          src="/images/scenes/hero.png"
          placeholder="blur"
          blurDataURL="/images/scenes/hero.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
