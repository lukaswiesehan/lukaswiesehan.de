import {ReactNode} from 'react'
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'

type FadeInProps = {
  direction: 'up' | 'left' | 'right'
  delay?: number | 0
  children: ReactNode
  className?: string
}

export const FadeIn = ({
  direction,
  delay,
  children,
  className,
}: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-24px 0px',
  })

  let variants = {}
  const upVariants = {
    inView: {
      y: 0,
      opacity: 1,
      transition: {type: 'spring', duration: 0.8, delay},
    },
    notInView: {y: 64, opacity: 0},
  }
  const leftVariants = {
    inView: {x: 0},
    notInView: {x: 32},
  }
  const rightVariants = {
    inView: {
      x: 0,
      opacity: 1,
      transition: {type: 'spring', duration: 0.8, delay},
    },
    notInView: {x: -32, opacity: 0},
  }

  if (direction == 'up') variants = upVariants
  else if (direction == 'left') variants = leftVariants
  else if (direction == 'right') variants = rightVariants

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="relative h-full w-full"
        animate={inView ? 'inView' : 'notInView'}
        initial={'notInView'}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  )
}
