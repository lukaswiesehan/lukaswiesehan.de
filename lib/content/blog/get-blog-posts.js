import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getBlogPosts = () => {
  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(dir)

  const allPosts = files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const filePath = path.join(dir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const meta = matter(content)
    return {slug, ...meta.data}
  })

  return allPosts.filter((post) => post.online).sort((a, b) => b.id - a.id)
}
