import {parseMarkdown} from '@lib/content/parse-markdown'

import {Container} from '@components/container'
import {PrivacyHeadingSection} from '@components/sections/privacy-heading-section'
import {ContentSection} from '@components/sections/content-section'

export const getStaticProps = async () => {
  const {content, toc} = await parseMarkdown('content/privacy.md')
  return {props: {content, toc}}
}

export const Privacy = ({content, toc}) => {
  return (
    <Container>
      <PrivacyHeadingSection />
      <ContentSection content={content} toc={toc} />
    </Container>
  )
}

export default Privacy
