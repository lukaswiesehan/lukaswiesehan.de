import {useState} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'

import {Section} from '@components/layout/section'
import {Card} from '@components/layout/card'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {HeadingBody} from '@components/typography/heading-body'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {Button} from '@components/elements/button'
import {ErrorMessage} from '@components/elements/error-message'

export const CancelMeetingSection = () => {
  const router = useRouter()
  const {id, firstName, email, zoomId} = router.query
  const breakpoint = useBreakpoint()

  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  const submit = async () => {
    try {
      setLoadingSubmit(true)
      const response = await fetch('/api/contact/cancel', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id,
          firstName,
          email,
          zoomId
        })
      })
      const {error} = await response.json()
      if (error) throw error
      router.push('/contact')
    } catch (error) {
      console.log(error)
      setSubmissionError('Leider ist etwas schief gelaufen. Versuchs nochmal oder schreib mir eine Email!')
    } finally {
      setLoadingSubmit(false)
    }
  }

  return (
    <Section backgroundHeight="half" className="lg:pt-16 xl:pt-20">
      <Card background="/images/backgrounds/background-red-to-violet.jpg" className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-1 gap-y-16 gap-x-0.5 lg:-mx-4 lg:grid-cols-3">
          <div className="lg:col-span-2 lg:max-w-lg lg:px-4">
            <FadeIn direction="up">
              <Heading className="max-w-md">Du musst unser Gespräch verschieben?</Heading>
            </FadeIn>
            <FadeIn direction="up">
              <HeadingBody className="mt-8 md:max-w-2xl lg:mt-12">
                <b className="font-bold text-slate-900">Schade {firstName}</b>, dass Du unser Gespräch nicht wahrnehmen kannst. Nutze den Button rechts, um
                den Termin abzusagen. Anschließend wirst Du weitergeleitet, damit Du direkt einen neuen Termin buchen kannst, der Dir besser passt.
              </HeadingBody>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={breakpoint.lg ? 0.1 : 0} className="-mx-4 lg:mx-0">
            <Icon src="/icons/red-calendar-cancel-icon.svg" className="shadow-red-100" />
            <ParagraphHeading text="Termin absagen" className="border-red-300" />
            <Paragraph>Du wirst direkt weitergeleitet, um einen neuen Termin auszuwählen.</Paragraph>
            <div className="mt-8 px-4">
              <Button type="primary" action={submit} text="Termin absagen" loading={loadingSubmit} />
            </div>
            {submissionError && (
              <div className="mt-4 px-4">
                <ErrorMessage>{submissionError}</ErrorMessage>
              </div>
            )}
          </FadeIn>
        </div>
      </Card>
      <FadeIn direction="up" delay={0.2} className="relative mt-8 mb-16 -mr-8 ml-8 hidden lg:block">
        <Image
          src="/images/scenes/contact.png"
          alt="Contact Scene"
          placeholder="blur"
          blurDataURL="/images/scenes/contact.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </FadeIn>
    </Section>
  )
}
