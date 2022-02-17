import Image from 'next/image'
import {useState} from 'react'
import {AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/router'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {Testimonial} from '@components/elements/testimonial'

import {Testimonial as TestimonialType} from '@content/testimonials'

type TestimonialSectionProps = {
  testimonials: TestimonialType[]
}

export const TestimonialsSection = ({testimonials}: TestimonialSectionProps) => {
  const [[selectedTab, direction], setSelectedTab] = useState([0, 1])
  const [height, setHeight] = useState(200)
  const router = useRouter()

  const clickTestimonial = (index) => {
    trackGoal('GRLABTAO', 0)
    setSelectedTab([index, index > selectedTab ? 1 : -1])
  }

  return (
    <Section backgroundHeight="full" className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40">
      <FadeIn
        direction="up"
        className="relative order-2 col-span-1 mt-4 h-64 sm:h-96 md:col-span-2 md:h-[400px] lg:order-1 lg:row-span-2 lg:mx-4 lg:h-auto lg:max-h-[430px]"
      >
        <Image src={testimonials[selectedTab].image} alt={testimonials[selectedTab].title} layout="fill" objectFit="contain" objectPosition="center" />
      </FadeIn>
      <div className="order-1 col-span-1 px-4 md:col-span-2 lg:order-2">
        <FadeIn direction="up">
          <Subheading>Referenzen aus dem Markt</Subheading>
          <Heading className="max-w-xl">100% Zufriedene Kunden</Heading>
        </FadeIn>
        <FadeIn direction="up">
          <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
            Meine Kunden kommen aus den unterschiedlichsten Branchen, haben aber eines gemeinsam: ihre Next-Level Produktwebsite.
          </HeadingBody>
        </FadeIn>
      </div>
      <FadeIn direction="up" className="order-3 col-span-1 mt-8 space-y-8 md:col-span-2 lg:mt-12">
        <ul className="mb-4 flex overflow-x-scroll px-4 sm:mb-8">
          {testimonials.map(({title}, index) => (
            <li
              key={index}
              className={`mr-2 mb-2 flex h-8 flex-shrink-0 cursor-pointer items-center rounded-full px-4 font-bold text-slate-900 hover:bg-slate-200/50 sm:mb-0 ${
                selectedTab == index && 'bg-slate-200'
              }`}
              onClick={() => clickTestimonial(index)}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="relative -ml-0.5 overflow-x-hidden pl-0.5" style={{height}}>
          <AnimatePresence initial={false} custom={direction}>
            {testimonials.map(
              ({headline, body, article}, index) =>
                selectedTab == index && (
                  <Testimonial
                    key={index}
                    index={index}
                    headline={headline}
                    body={body}
                    article={article}
                    transitionDirection={direction}
                    setHeight={setHeight}
                  />
                )
            )}
          </AnimatePresence>
        </div>
      </FadeIn>
    </Section>
  )
}
