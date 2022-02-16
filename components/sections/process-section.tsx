import Image from 'next/image'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

export const ProcessSection = () => {
  return (
    <Section backgroundHeight="full" className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40">
      <div className="order-2 col-span-1 p-4 md:col-span-2 lg:order-1">
        <FadeIn direction="up">
          <Subheading>Vier Schritte zur erfolgreichen Produktwebsite</Subheading>
          <Heading className="max-w-xl">So wird Deine Vision Wirklichkeit</Heading>
        </FadeIn>
        <FadeIn direction="up">
          <HeadingBody className="mt-8 md:max-w-xl lg:mt-12">
            Gemeinsam bringen wir Dein Produkt <b className="text-slate-900">in weniger als 12 Wochen online</b>. Mit allen Funktionen, die Du und Deine
            Kunden brauchen und einem herausragenden Design, das perfekt zu Deiner Marke passt.
          </HeadingBody>
        </FadeIn>
      </div>
      <FadeIn
        direction="up"
        className="relative order-1 col-span-1 h-64 sm:h-80 md:col-span-2 md:h-96 lg:order-2 lg:mx-4 lg:mb-0 lg:-mt-12 lg:aspect-square lg:h-auto"
      >
        <Image
          src="/images/scenes/process.png"
          alt="Process Scene"
          placeholder="blur"
          blurDataURL="/images/scenes/process.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
      <FadeIn direction="up" className="order-3 lg:-mt-44 2xl:-mt-48">
        <Icon src="/icons/indigo-search-icon.svg" className="shadow-indigo-100" />
        <ParagraphHeading text="1 - Analyse" className="border-indigo-300" />
        <Paragraph>
          Wir sprechen über Dein Produkt, Dein Unternehmen und dessen <b className="text-slate-900">Werte & Ziele</b>. So legen wir gemeinsam den
          Funktions-umfang des Endprodukts und die Ansprü-che an das Design der Website fest.
        </Paragraph>
      </FadeIn>
      <FadeIn direction="up" className="order-4 lg:-mt-28 2xl:-mt-32">
        <Icon src="/icons/indigo-architecture-icon.svg" className="shadow-indigo-100" />
        <ParagraphHeading text="2 - Konzeption" className="border-indigo-300" />
        <Paragraph>
          Auf Basis der Analyse stelle ich ein Ge-samtsystem aus <b className="text-slate-900">modernen Tools</b>
          zusam-men. So erhalten wir auch bei komplexen Anforderungen eine perfekte Nutzerer-fahrung für Deine Kunden und ein kin-derleicht bedienbares
          System für Dich.
        </Paragraph>
      </FadeIn>
      <FadeIn direction="up" className="order-5 lg:-mt-12 2xl:-mt-16">
        <Icon src="/icons/indigo-colors-icon.svg" className="shadow-indigo-100" />
        <ParagraphHeading text="3 - Design" className="border-indigo-300" />
        <Paragraph>
          Lösgelöst von Baukästen oder Content Management Systemen erarbeiten wir gemeinsam ein Design, das{' '}
          <b className="text-slate-900">Dein Produkt ins Rampenlicht</b> stellt. Natürlich modern und für Mobilgeräte optimiert.
        </Paragraph>
      </FadeIn>
      <FadeIn direction="up" className="order-6 lg:mt-4 2xl:mt-0">
        <Icon src="/icons/indigo-server-icon.svg" className="shadow-indigo-100" />
        <ParagraphHeading text="4 - Realisierung" className="border-indigo-300" />
        <Paragraph>
          Um Deine Anforderungen, die entspre-chenden Tools und das individuelle Design zusammen zu bringen, entwickle ich Deine Website von Grund auf
          selbst. So entsteht schließlich die <b className="text-slate-900">perfekte Lösung</b> für Deine Produktwebsite.
        </Paragraph>
      </FadeIn>
    </Section>
  )
}
