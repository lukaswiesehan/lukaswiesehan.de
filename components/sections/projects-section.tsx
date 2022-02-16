import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {SolidCalendarIcon} from '@components/elements/icons/solid-calendar-icon'
import {Button} from '@components/elements/button'

export const ProjectsSection = ({projects}) => {
  const breakpoint = useBreakpoint()
  const router = useRouter()

  return (
    <Section backgroundHeight="full" className="pt-20 pb-16 lg:pb-0 lg:pt-28 xl:pt-32 2xl:pt-40">
      {projects.map(({title, excerpt, slug, date, cover}, index) => (
        <div key={index} className="lg:col-span-2">
          <FadeIn direction="up" delay={breakpoint.md ? (index % 2 != 0 ? 0.2 : 0) : 0} className="max-w-md 2xl:max-w-lg">
            <Link href={`/work/${slug}`}>
              <a className="block">
                <div className="relative mx-4 mb-12 mt-8 h-48 md:mt-0">
                  <Image src={cover} alt={title} placeholder="blur" blurDataURL={cover} layout="fill" objectFit="contain" objectPosition="left" />
                </div>
                <ParagraphHeading text={title} className="border-sky-300" />
                <p className="mt-2 mb-4 flex items-center space-x-1 px-4 text-sm font-bold md:mb-8">
                  <SolidCalendarIcon />
                  <span>{date}</span>
                </p>
                <Paragraph>
                  <span className="line-clamp-4">{excerpt}</span>
                </Paragraph>
                <p className="block px-4">
                  <Button type="secondary" text="Weiterlesen" action={() => router.push(`/work/${slug}`)} loading={false} />
                </p>
              </a>
            </Link>
          </FadeIn>
        </div>
      ))}
    </Section>
  )
}
