import Image from 'next/image'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'

import {ClientLogo} from '@content/client-logos'

type ClientsSectionProps = {
  clientLogos: ClientLogo[]
}

export const ClientsSection = ({clientLogos}: ClientsSectionProps) => {
  const breakpoint = useBreakpoint()

  return (
    <Section
      backgroundHeight="full"
      className="pt-8 md:pt-12 xl:pt-16 2xl:pt-24"
    >
      {clientLogos.map(({logo, alt}, index) => (
        <FadeIn
          key={index}
          direction="up"
          className="h-20"
          delay={
            breakpoint.lg
              ? index * 0.1
              : breakpoint.md && index % 2 != 0
              ? 0.1
              : 0
          }
        >
          <div className="relative mx-auto h-full w-full max-w-[200px] opacity-70">
            <Image
              src={logo}
              alt={alt}
              placeholder="blur"
              blurDataURL={logo}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </FadeIn>
      ))}
    </Section>
  )
}
