import {parseMarkdown} from '@lib/content/parse-markdown'

import {Container} from '@components/container'
import {CookiesHeadingSection} from '@components/sections/cookies-heading-section'
import {ContentSection} from '@components/sections/content-section'

export const getStaticProps = async () => {
  const {content, toc} = await parseMarkdown('content/cookies.md')
  return {props: {content, toc}}
}

export const Cookies = ({content, toc}) => {
  return (
    <Container>
      <CookiesHeadingSection />
      <ContentSection content={content} toc={toc} />
    </Container>
  )
}

export default Cookies
