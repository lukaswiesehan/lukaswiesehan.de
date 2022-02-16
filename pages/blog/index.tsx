import Link from 'next/link'
import {getBlogPosts} from '@lib/content/blog/get-blog-posts'

import {Container} from '@components/container'
import {BlogHeadingSection} from '@components/sections/blog-heading-section'
import {BlogPostsSection} from '@components/sections/blog-posts-section'

export const getStaticProps = () => {
  const posts = getBlogPosts()

  return {props: {posts}}
}

export const Blog = ({posts}) => {
  return (
    <Container
      title="Design & Entwicklung im Blog - Lukas Wiesehan"
      description="Ich schreibe regelmäßig zu Themen aus den Bereichen Webdesign, Webentwicklung und eCommerce. Im Fokus liegen immer Tipps, Tricks und Vorteile für Deine Produkt-Website."
    >
      <BlogHeadingSection />
      <BlogPostsSection posts={posts} />
    </Container>
  )
}

export default Blog
