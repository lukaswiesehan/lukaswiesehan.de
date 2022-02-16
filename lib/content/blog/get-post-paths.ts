import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPostPaths = () => {
  let paths = []

  const dir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const meta = matter(content)
    if (meta.data.online) {
      const slug = file.replace(/\.md$/, '')
      paths.push({
        params: {slug}
      })
    }
  }

  return paths
}
