import Link from 'next/link'
import {useRouter} from 'next/router'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {SolidCalendarIcon} from '@components/elements/icons/solid-calendar-icon'
import {SolidUserIcon} from '@components/elements/icons/solid-user-icon'
import {Tags} from '@components/elements/tags'
import {Button} from '@components/elements/button'

export const BlogPostsSection = ({posts}) => {
  const breakpoint = useBreakpoint()
  const router = useRouter()

  return (
    <Section backgroundHeight="full" className="pt-20 pb-16 lg:pb-0 lg:pt-28 xl:pt-32 2xl:pt-40">
      {posts.map(({title, excerpt, slug, author, date, tags}, index) => (
        <div key={index} className="lg:col-span-2">
          <FadeIn direction="up">
            <Link href={`/blog/${slug}`}>
              <a className="block">
                <ParagraphHeading text={title} className="border-indigo-300" />
                <p className="mt-2 space-y-2 px-4 text-sm font-bold sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <SolidCalendarIcon />
                    <span>{date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <SolidUserIcon />
                    <span>{author.name}</span>
                  </span>
                </p>
                <div className="my-4 space-y-2 px-4 md:my-8">
                  <Tags tags={tags} />
                </div>
                <Paragraph>
                  <span className="line-clamp-4">{excerpt}</span>
                </Paragraph>
                <p className="block px-4">
                  <Button type="secondary" text="Weiterlesen" action={() => router.push(`/blog/${slug}`)} loading={false} />
                </p>
              </a>
            </Link>
          </FadeIn>
        </div>
      ))}
    </Section>
  )
}
