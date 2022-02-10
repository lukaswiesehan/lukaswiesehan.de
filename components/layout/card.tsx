import react from 'react'
import Image from 'next/image'

type CardProps = {
  background: string
  children: react.ReactNode
  className: string
}

export const Card = ({background, children, className}: CardProps) => {
  return (
    <div
      className={`relative -mx-12 overflow-hidden rounded-3xl px-16 py-12 md:py-16 lg:-mx-16 lg:px-20 lg:py-20 xl:-mx-24 xl:p-28 ${className}`}
    >
      <Image
        src={background}
        placeholder="blur"
        blurDataURL={background}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute top-0 left-0 h-full w-full mix-blend-overlay">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}
