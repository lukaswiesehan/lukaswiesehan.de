import Link from 'next/link'
import Image from 'next/image'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {HeadingBody} from '@components/typography/heading-body'
import {SolidArrowLeftIcon} from '@components/elements/icons/solid-arrow-left-icon'
import {SolidCalendarIcon} from '@components/elements/icons/solid-calendar-icon'
import {Button} from '@components/elements/button'

type ProjectHeadingSectionProps = {
  meta: {
    background: string
    title: string
    date: string
    excerpt: string
    cover: string
    url: string
  }
}

export const ProjectHeadingSection = ({meta}: ProjectHeadingSectionProps) => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background={meta.background} className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <FadeIn direction="up" className="mb-8 mt-24 lg:mt-0">
          <Link href="/work">
            <a className="inline-flex items-center space-x-1 font-bold text-indigo-400 hover:text-indigo-500">
              <SolidArrowLeftIcon />
              <span>Zurück zur Übersicht</span>
            </a>
          </Link>
        </FadeIn>
        <div className="mb-8 md:max-w-xl">
          <FadeIn direction="up" delay={0.1}>
            <Heading>{meta.title}</Heading>
            <p className="flex items-center space-x-1 font-bold lg:-mt-4">
              <SolidCalendarIcon />
              <span>{meta.date}</span>
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">{meta.excerpt}</HeadingBody>
            <div className="mt-4">
              <Button type="secondary" text="Website besuchen" action={() => window.open(meta.url, '_ blank')} loading={false} />
            </div>
          </FadeIn>
        </div>
      </Card>
      <FadeIn
        direction="up"
        delay={breakpoint.lg ? 0.3 : 0}
        className="relative order-1 -mb-32 mt-8 h-64 lg:order-2 lg:mt-0 lg:mb-0 lg:mr-4 lg:-ml-32 lg:h-auto xl:-mr-24"
      >
        <Image src={meta.cover} alt={meta.title} placeholder="blur" blurDataURL={meta.cover} layout="fill" objectFit="contain" objectPosition="center" />
      </FadeIn>
    </Section>
  )
}
