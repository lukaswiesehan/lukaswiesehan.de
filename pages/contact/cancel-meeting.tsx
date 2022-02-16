import Head from 'next/head'
import {Container} from '@components/container'
import {CancelMeetingSection} from '@components/sections/cancel-meeting-section'

export const CancelMeeting = () => {
  return (
    <Container title="Gespräch absagen - Lukas Wiesehan">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <CancelMeetingSection />
    </Container>
  )
}

export default CancelMeeting
