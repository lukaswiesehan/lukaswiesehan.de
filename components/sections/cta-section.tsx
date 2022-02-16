import Image from 'next/image'
import {useRouter} from 'next/router'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {CTA} from '@components/elements/cta'

type CTASectionProps = {
  text: string
}

export const CTASection = ({text}: CTASectionProps) => {
  const router = useRouter()

  const clickCTA = () => {
    router.push('/contact')
  }

  return (
    <Section backgroundHeight="full" className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40">
      <FadeIn direction="up" className="col-span-1 md:col-span-2 lg:col-span-4">
        <Card background="/images/backgrounds/background-blue-to-red.jpg" className="">
          <HeadingBody className="max-w-lg">
            <b className="text-slate-900">{text}</b>
          </HeadingBody>
          <CTA action={clickCTA} />
        </Card>
      </FadeIn>
    </Section>
  )
}
