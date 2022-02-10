import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

export const HellIslandSection = () => {
  const breakpoint = useBreakpoint()

  return (
    <Section
      backgroundHeight="full"
      className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40"
    >
      <FadeIn direction="up" className="px-4 md:col-span-2 lg:col-span-4">
        <Subheading>Weil Wordpress & Co. nicht genug sind</Subheading>
        <Heading>Deine Vision wird ausgebremst?</Heading>
      </FadeIn>
      <FadeIn direction="up">
        <Icon src="/icons/red-lightbulb-icon.svg" className="shadow-red-100" />
        <ParagraphHeading
          text="Kreative Einschränkungen?"
          className="border-red-300"
        />
        <Paragraph>
          Baukästen und CMS bieten nur eingeschränkte Möglichkeiten zur
          Individualisierung. Hier müssen kreative Köpfe{' '}
          <b className="text-slate-900">Abstriche in Kauf</b> nehmen.
        </Paragraph>
      </FadeIn>
      <FadeIn direction="up" delay={breakpoint.md ? 0.1 : 0}>
        <Icon
          src="/icons/red-wrench-icon.svg"
          className="shadow-red-100"
          transitionDelay={breakpoint.md ? 0.1 : 0}
        />
        <ParagraphHeading
          text="Fehlende Funktionen?"
          className="border-red-300"
        />
        <Paragraph>
          Für fortschrittliche Funktionen werden{' '}
          <b className="text-slate-900">Plugins benötigt</b>, die es oft noch
          garnicht gibt. Spätenstens hier werden Budget und/oder Design
          gesprengt.
        </Paragraph>
      </FadeIn>
      <FadeIn direction="up" delay={breakpoint.lg ? 0.2 : 0}>
        <Icon
          src="/icons/red-notebook-icon.svg"
          className="shadow-red-100"
          transitionDelay={breakpoint.lg ? 0.2 : 0}
        />
        <ParagraphHeading
          text="Unübersichtliche Systeme?"
          className="border-red-300"
        />
        <Paragraph>
          Etablierte Systeme basieren auf dem Ziel, möglichst viele
          Anwendungsfälle abzudecken. Das führt zu{' '}
          <b className="text-slate-900">überladener Software</b>, die keiner
          mehr durchblickt.
        </Paragraph>
      </FadeIn>
      <FadeIn
        direction="up"
        delay={breakpoint.lg ? 0.3 : breakpoint.md ? 0.1 : 0}
      >
        <Icon
          src="/icons/red-wallet-icon.svg"
          className="shadow-red-100"
          transitionDelay={breakpoint.lg ? 0.3 : breakpoint.md ? 0.1 : 0}
        />
        <ParagraphHeading
          text="Hohe Agenturpreise?"
          className="border-red-300"
        />
        <Paragraph>
          Web-Agenturen rufen mindestens fünf-stellige Summen für individuelle
          Lösungen auf, die damit für{' '}
          <b className="text-slate-900">Startups unzugänglich</b> werden.
        </Paragraph>
      </FadeIn>
    </Section>
  )
}
