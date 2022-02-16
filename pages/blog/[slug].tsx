import {getPostPaths} from '@lib/content/blog/get-post-paths'
import {parseMarkdown} from '@lib/content/parse-markdown'

import {Container} from '@components/container'
import {BlogPostHeadingSection} from '@components/sections/blog-post-heading-section'
import {ContentSection} from '@components/sections/content-section'
import {CTASection} from '@components/sections/cta-section'

export const getStaticPaths = async () => {
  const paths = getPostPaths()

  return {paths, fallback: false}
}

export const getStaticProps = async ({params, locale}) => {
  const {content, toc, meta} = await parseMarkdown(`content/blog/${params.slug}.md`)

  return {
    props: {content, toc, meta}
  }
}

export const BlogPost = ({content, toc, meta}) => {
  return (
    <Container title={`${meta.title} - Lukas Wiesehan`} description={meta.excerpt}>
      <BlogPostHeadingSection meta={meta} />
      <ContentSection content={content} toc={toc} />
      <CTASection text={meta.cta} />
    </Container>
  )
}

export default BlogPost
