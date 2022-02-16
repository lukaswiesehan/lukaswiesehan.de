import Image from 'next/image'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Title} from '@components/typography/title'
import {HeadingBody} from '@components/typography/heading-body'

export const BlogHeadingSection = () => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-green-to-violet.jpg" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <div className="mt-24 lg:mt-0 lg:max-w-lg">
          <FadeIn direction="up" delay={breakpoint.lg ? 0.1 : 0}>
            <Title className="max-w-md">Webdesign & Entwicklung im Blog</Title>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
              Ich schreibe regelmäßig zu Themen aus den Bereichen Webdesign, Webentwicklung und eCommerce. Im Fokus liegen immer Tipps, Tricks und Vorteile
              für Deine Produkt-Website.
            </HeadingBody>
          </FadeIn>
        </div>
      </Card>
      <FadeIn
        direction="up"
        delay={breakpoint.lg ? 0.3 : 0}
        className="relative order-1 -mb-32 mt-8 h-64 lg:order-2 lg:mt-0 lg:mb-0 lg:mr-4 lg:-ml-32 lg:h-auto xl:-mr-24"
      >
        <Image
          src="/images/scenes/blog.png"
          alt="Blog Scene"
          placeholder="blur"
          blurDataURL="/images/scenes/blog.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
