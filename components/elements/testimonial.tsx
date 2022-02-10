import {useEffect, useRef} from 'react'
import {motion} from 'framer-motion'

import {Stars} from '@components/elements/stars'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

type TestimonialProps = {
  index: number
  headline: string
  body: string
  transitionDirection: number
  setHeight: Function
}

export const Testimonial = ({index, headline, body, transitionDirection, setHeight}) => {
  const ref = useRef(null)
  const variants = {
    enter: (transitionDirection: number) => {
      return {x: `${transitionDirection * 100}%`}
    },
    selected: {x: 0},
    exit: (transitionDirection: number) => {
      return {
        x: `${transitionDirection * -100}%`
      }
    }
  }

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <motion.div
      key={index}
      ref={ref}
      className="absolute top-0 w-full"
      custom={transitionDirection}
      variants={variants}
      initial="enter"
      animate="selected"
      exit="exit"
    >
      <div className="space-y-4 sm:flex sm:justify-between sm:space-y-0">
        <ParagraphHeading text={`"${headline}"`} className="border-orange-300" />
        <Stars />
      </div>
      <Paragraph>{body}</Paragraph>
    </motion.div>
  )
}
