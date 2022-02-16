import {getProjectPaths} from '@lib/content/work/get-project-paths'
import {parseMarkdown} from '@lib/content/parse-markdown'

import {Container} from '@components/container'
import {ProjectHeadingSection} from '@components/sections/project-heading-section'
import {ContentSection} from '@components/sections/content-section'
import {CTASection} from '@components/sections/cta-section'

export const getStaticPaths = async () => {
  const paths = getProjectPaths()

  return {paths, fallback: false}
}

export const getStaticProps = async ({params}) => {
  const {content, toc, meta} = await parseMarkdown(`content/work/${params.slug}.md`)

  return {
    props: {content, toc, meta}
  }
}

export const Project = ({content, toc, meta}) => {
  return (
    <Container title={`${meta.title} - Lukas Wiesehan`} description={meta.excerpt}>
      <ProjectHeadingSection meta={meta} />
      <ContentSection content={content} toc={toc} />
      <CTASection text={meta.cta} />
    </Container>
  )
}

export default Project
