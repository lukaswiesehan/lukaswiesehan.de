import {ReactNode} from 'react'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {ParagraphHeading} from '@components/typography/paragraph-heading'

type ScrollToProps = {
  id: string
  children: ReactNode
}

const ScrollTo = ({id, children}: ScrollToProps) => {
  const scroll = () => {
    const element = document.getElementById(id)
    const position = element.getBoundingClientRect()
    window.scrollTo({top: position.top - 100, behavior: 'smooth'})
  }

  return (
    <span className="cursor-pointer text-slate-900 hover:text-slate-600" onClick={scroll}>
      {children}
    </span>
  )
}

type ContentSectionProps = {
  content: string
  toc: [any]
}

export const ContentSection = ({content, toc}: ContentSectionProps) => {
  const breakpoint = useBreakpoint()

  return (
    <Section backgroundHeight="full" className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40">
      <FadeIn direction="up" delay={breakpoint.lg ? 0.2 : 0} className="order-1 col-span-1 md:col-span-2 lg:order-2 lg:col-span-1">
        <ParagraphHeading text="Inhaltsübersicht" className="border-indigo-300" />
        <ul className="mt-4 mb-8 space-y-2 pr-4">
          {toc.map(({depth, id, heading}, index) => (
            <li key={index} className="group flex leading-snug">
              <div className={`-ml-0.5 mt-0.5 h-5 border-l-2 border-transparent group-hover:border-indigo-300`} />
              <div className={depth == 2 ? 'pl-[3.125rem]' : depth == 1 ? 'pl-[2.125rem]' : 'pl-[1.125rem] font-bold'}>
                <ScrollTo id={id}>{heading}</ScrollTo>
              </div>
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn direction="up" className="order-2 col-span-1 md:col-span-2 lg:order-1 lg:col-span-3">
        <div
          className="prose px-4 prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-500 prose-ul:text-slate-500 md:max-w-2xl 2xl:max-w-3xl"
          dangerouslySetInnerHTML={{__html: content}}
        ></div>
      </FadeIn>
    </Section>
  )
}
