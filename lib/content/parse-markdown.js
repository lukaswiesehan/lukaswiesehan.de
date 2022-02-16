import fs from 'fs'
import matter from 'gray-matter'
import {unified} from 'unified'
import {visit} from 'unist-util-visit'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeFigure from 'rehype-figure'
import rehypeStringify from 'rehype-stringify'

export const parseMarkdown = async (path) => {
  let toc = []
  const file = fs.readFileSync(path, 'utf8')
  const meta = matter(file)
  const content = (
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(() => {
        return (tree) => {
          visit(tree, 'element', (node) => {
            if (node.tagName[0] == 'h') {
              toc.push({
                depth: Number(node.tagName[1]) - 2,
                id: node.properties.id,
                heading: node.children[0].value
              })
            }
          })
        }
      })
      .use(rehypeFigure, {className: 'figure'})
      .use(rehypeStringify)
      .process(meta.content)
  ).toString()

  return {content, toc, meta: meta.data}
}
