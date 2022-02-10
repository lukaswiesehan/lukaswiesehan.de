import {useBreakpoint} from '@lib/helpers/use-breakpoint'
import {trackGoal} from 'fathom-client'
import {useRouter} from 'next/router'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {CTA} from '@components/elements/cta'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {Portrait} from '@components/elements/portrait'

export const AboutMeSection = () => {
  const breakpoint = useBreakpoint()
  const router = useRouter()

  const clickCTA = () => {
    trackGoal('TYBVCVMP', 0)
    router.push('/contact')
  }

  return (
    <Section
      backgroundHeight="full"
      className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40"
    >
      <div className="order-2 flex flex-col justify-end pt-8 md:col-span-2 lg:order-1 lg:max-w-sm lg:py-20 xl:py-28 2xl:max-w-md">
        <FadeIn direction="up">
          <Portrait className="mb-8 lg:mb-12" />
        </FadeIn>
        <FadeIn direction="up">
          <ParagraphHeading
            text="Lukas Wiesehan – Designer & Developer"
            className="border-emerald-300"
          />
          <Paragraph>
            Ich bin Lukas. Seit 5 Jahren bin ich{' '}
            <b className="text-slate-900">selbstständiger Designer</b> und 2021
            habe ich meinen <b className="text-slate-900">B.Sc. Mechatronik</b>{' '}
            abgeschlossen. Meine technische Affinität spiegelt sich auch in
            meiner Arbeit wieder – die Webentwicklung ist für mich die perfekte{' '}
            <b className="text-slate-900">
              Kombination aus Design & Technologie
            </b>
            .
          </Paragraph>
        </FadeIn>
      </div>
      <Card
        background="/images/backgrounds/background-blue-to-red.jpg"
        className="order-1 md:col-span-2 lg:order-2"
      >
        <div className="space-y-16 lg:space-y-20">
          <div className="col-span-1 md:col-span-2">
            <FadeIn direction="up">
              <Subheading>Design & Entwicklung aus einer Hand</Subheading>
              <Heading className="max-w-md">
                Technologien von morgen für Produkte von morgen
              </Heading>
            </FadeIn>
            <FadeIn direction="up">
              <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
                Als Ingenieur weiß ich, wie wichtig Dir Dein Produkt ist. Als
                Designer und Entwickler stelle ich darum sicher, dass Du bei
                Deiner Website{' '}
                <b className="text-slate-900">keinerlei Abstriche</b> machen
                musst.
              </HeadingBody>
              <CTA action={clickCTA} />
            </FadeIn>
          </div>
          <div className="-mx-4 grid grid-cols-1 gap-y-8 gap-x-0.5 md:grid-cols-2">
            <FadeIn direction="up" delay={breakpoint.lg ? 0.1 : 0}>
              <ParagraphHeading
                text="100% Freies Design"
                className="border-emerald-300"
              />
              <Paragraph>
                Dein Produkt steht im Fokus. Deine Website wird ohne Baukästen
                oder Themes gestaltet, damit sich das Ergebnis perfekt in die{' '}
                <b className="text-slate-900">Identität Deiner Marke</b> fügt –
                nicht andersherum.
              </Paragraph>
            </FadeIn>
            <FadeIn
              direction="up"
              delay={breakpoint.lg ? 0.2 : breakpoint.md ? 0.1 : 0}
            >
              <ParagraphHeading
                text="Cutting-Edge Technologie"
                className="border-emerald-300"
              />
              <Paragraph>
                Durch eine gezielte Auswahl von Microservices betreibst Du die
                Website{' '}
                <b className="text-slate-900">kostengünstig und sicher</b>. Die
                morderne Architektur sorgt im Frontend für optimale{' '}
                <b className="text-slate-900">Performance und SEO</b>.
              </Paragraph>
            </FadeIn>
          </div>
        </div>
      </Card>
    </Section>
  )
}
