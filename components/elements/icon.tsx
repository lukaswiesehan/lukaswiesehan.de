import {motion} from 'framer-motion'
import Image from 'next/image'

type IconProps = {
  src: string
  className?: string
  transitionDelay?: number | 0
}

export const Icon = ({src, className, transitionDelay}: IconProps) => {
  const variants = {
    inView: {
      scale: 1,
      transition: {type: 'spring', duration: 0.8, delay: transitionDelay}
    },
    notInView: {scale: 0}
  }

  return (
    <motion.div variants={variants} className={`ml-4 mb-4 inline-block h-12 w-12 rounded-full shadow-lg lg:mb-6 ${className}`}>
      <Image src={src} alt="Icon" placeholder="blur" blurDataURL={src} width={48} height={48} />
    </motion.div>
  )
}
