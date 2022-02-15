import Image from 'next/image'
import Link from 'next/link'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

export const LegalHeadingSection = () => {
  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-blue-to-green.jpg" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <div className="-mx-4 mt-24 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
          <FadeIn direction="up" className="md:col-span-2 lg:col-span-3">
            <Heading className="max-w-md">Impressum</Heading>
          </FadeIn>
          <FadeIn direction="up">
            <ParagraphHeading text="Betreiber der Website" className="border-indigo-300" />
            <Paragraph>
              <span className="block text-slate-900">
                <b>Lukas Wiesehan</b>
                <br />
                Design & Development
              </span>
              <span className="mt-2 block">
                Herrenstraße 30a
                <br />
                21698 Harsefeld
              </span>
              <span className="mt-2 block">
                <Link href="/contact">
                  <a className="underline">Kontakt</a>
                </Link>
              </span>
            </Paragraph>
          </FadeIn>
          <FadeIn direction="up">
            <ParagraphHeading text="Angaben zum Unternehmen" className="border-indigo-300" />
            <Paragraph>
              <span className="block">
                <b>Steuernummer:</b> 43/148/05020
              </span>
              <span className="mt-2 block">
                <b>Umsatzsteuer-ID:</b> DE341117007
              </span>
            </Paragraph>
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
