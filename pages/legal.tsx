import {parseMarkdown} from '@lib/content/parse-markdown'

import {Container} from '@components/container'
import {LegalHeadingSection} from '@components/sections/legal-heading-section'
import {ContentSection} from '@components/sections/content-section'

export const getStaticProps = async () => {
  const {content, toc} = await parseMarkdown('content/legal.md')
  return {props: {content, toc}}
}

export const Legal = ({content, toc}) => {
  return (
    <Container title="Impressum - Lukas Wiesehan">
      <LegalHeadingSection />
      <ContentSection content={content} toc={toc} />
    </Container>
  )
}

export default Legal
