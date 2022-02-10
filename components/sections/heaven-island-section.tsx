import {useRouter} from 'next/router'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {CTA} from '@components/elements/cta'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

export const HeavenIslandSection = () => {
  const breakpoint = useBreakpoint()
  const router = useRouter()

  const clickCTA = () => {
    trackGoal('XUXI3DQK', 0)
    router.push('/contact')
  }

  return (
    <Section
      backgroundHeight="full"
      className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40"
    >
      <Card
        background="/images/backgrounds/background-blue-to-green.jpg"
        className="col-span-1 md:col-span-2 lg:col-span-4"
      >
        <div className="grid grid-cols-1 gap-y-16 gap-x-0.5 lg:grid-cols-2">
          <div className="lg:max-w-md">
            <FadeIn direction="up">
              <Subheading>Genau wie Du es Dir vorstellst</Subheading>
              <Heading className="max-w-md">
                Die Website, die Deinem Produkt gerecht wird
              </Heading>
            </FadeIn>
            <FadeIn direction="up">
              <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
                Ein Gesamtsystem, das für Dich und Dein Produkt konzipiert
                wurde. Design und Funktionen sind exakt auf{' '}
                <b className="text-slate-900">Deine Idee</b> abgestimmt.
              </HeadingBody>
              <CTA action={clickCTA} wrap={breakpoint['2xl'] ? false : true} />
            </FadeIn>
          </div>
          <div className="-mx-4 grid grid-cols-1 gap-y-8 gap-x-0.5 md:grid-cols-2 lg:ml-0">
            <FadeIn direction="up">
              <Icon
                src="/icons/green-cart-icon.svg"
                className="shadow-emerald-100"
              />
              <ParagraphHeading
                text="Shop, 3D-Konfigurator, Merchant-Map und mehr"
                className="border-emerald-300"
              />
              <Paragraph>
                Dein Produkt wird nicht nur ausgefallen präsentiert, sondern
                verkauft sich auch hervorragend. Du hast{' '}
                <b className="text-slate-900">
                  genau die Funktionen, die Du brauchst
                </b>{' '}
                – nicht mehr und nicht weniger.
              </Paragraph>
            </FadeIn>
            <FadeIn direction="up" delay={breakpoint.md ? 0.1 : 0}>
              <Icon
                src="/icons/green-fire-icon.svg"
                className="shadow-emerald-100"
                transitionDelay={breakpoint.md ? 0.1 : 0}
              />
              <ParagraphHeading
                text="Herausragendes Design"
                className="border-emerald-300"
              />
              <Paragraph>
                Ohne Grenzen aus Baukästen, Content Management Systemen oder
                Themes stehen{' '}
                <b className="text-slate-900">Dein Produkt und Deine Marke</b>{' '}
                im Fokus. So bietest Du Deinen Kunden ein in sich stimmiges
                visuelles Erlebnis.
              </Paragraph>
            </FadeIn>
            <FadeIn direction="up">
              <Icon
                src="/icons/green-user-check-icon.svg"
                className="shadow-emerald-100"
              />
              <ParagraphHeading
                text="Kinderleichte Bedienung"
                className="border-emerald-300"
              />
              <Paragraph>
                Das Gesamtsystem ist genau auf Deine Ansprüche, Kenntnisse und
                vorhandenen Prozesse abgestimmt. Du kannst Dich{' '}
                <b className="text-slate-900">
                  auf das Wesentliche konzentrieren
                </b>
                , statt Dich in komplexer Software zu verlieren.
              </Paragraph>
            </FadeIn>
            <FadeIn direction="up" delay={breakpoint.md ? 0.1 : 0}>
              <Icon
                src="/icons/green-shield-check-icon.svg"
                className="shadow-emerald-100"
                transitionDelay={breakpoint.md ? 0.1 : 0}
              />
              <ParagraphHeading
                text="Schnell, sicher, zuverlässig"
                className="border-emerald-300"
              />
              <Paragraph>
                Sogenannte serverlose Web-Technologie macht Deine Website nicht
                nur <b className="text-slate-900">schnell und sicher</b>. Sie
                ermöglichen außerdem einen{' '}
                <b className="text-slate-900">kostengünstigen und einfachen</b>{' '}
                Betrieb Deiner Website.
              </Paragraph>
            </FadeIn>
          </div>
        </div>
      </Card>
    </Section>
  )
}
