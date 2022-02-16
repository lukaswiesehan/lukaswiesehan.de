import Link from 'next/link'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {HeadingBody} from '@components/typography/heading-body'
import {Author} from '@components/elements/author'
import {Tags} from '@components/elements/tags'
import {SolidArrowLeftIcon} from '@components/elements/icons/solid-arrow-left-icon'
import {SolidCalendarIcon} from '@components/elements/icons/solid-calendar-icon'
import {SolidUserIcon} from '@components/elements/icons/solid-user-icon'

type BlogPostHeadingSectionProps = {
  meta: {
    background: string
    title: string
    author: any
    tags: string[]
    date: string
    excerpt: string
  }
}

export const BlogPostHeadingSection = ({meta}: BlogPostHeadingSectionProps) => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background={meta.background} className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-4">
        <div className="grid grid-cols-1 gap-x-0.5 gap-y-8 lg:grid-cols-4">
          <FadeIn direction="up" className="lg:col-span-4">
            <Link href="/blog">
              <a className="inline-flex items-center space-x-1 font-bold text-indigo-400 hover:text-indigo-500">
                <SolidArrowLeftIcon />
                <span>Zurück zur Übersicht</span>
              </a>
            </Link>
          </FadeIn>
          <div className="lg:col-span-3">
            <div className="md:max-w-2xl 2xl:max-w-3xl">
              <FadeIn direction="up" delay={0.1}>
                <Heading>{meta.title}</Heading>
                <p className="space-y-2 font-bold sm:flex sm:items-center sm:space-y-0 sm:space-x-4 lg:-mt-4">
                  <span className="flex items-center space-x-1">
                    <SolidCalendarIcon />
                    <span>{meta.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <SolidUserIcon />
                    <span>{meta.author.name}</span>
                  </span>
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">{meta.excerpt}</HeadingBody>
              </FadeIn>
            </div>
          </div>
          <FadeIn direction="up" delay={0.3}>
            <div className="h-full space-y-8 lg:flex lg:flex-col lg:justify-between">
              <Author author={meta.author} />
              <Tags tags={meta.tags} />
            </div>
          </FadeIn>
        </div>
      </Card>
    </Section>
  )
}
