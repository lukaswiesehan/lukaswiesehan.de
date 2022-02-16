import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Title} from '@components/typography/title'
import {HeadingBody} from '@components/typography/heading-body'

export const WorkHeadingSection = () => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-blue-to-green.jpg" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-4">
        <div className="lg:max-w-2xl">
          <FadeIn direction="up" delay={breakpoint.lg ? 0.1 : 0}>
            <Title className="">Produktwebsites meiner Kunden</Title>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <HeadingBody className="mt-8 md:max-w-xl lg:mt-12">
              Meine Kunden und ihre Produkte haben die unterschiedlichsten Anforderungen an eine Website. Schau&apos; Dir anhand einiger Projekte an, wie
              individuell hierauf eingegangen wird.
            </HeadingBody>
          </FadeIn>
        </div>
      </Card>
    </Section>
  )
}
