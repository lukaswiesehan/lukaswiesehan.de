import fs from 'fs'
import {unified} from 'unified'
import {visit} from 'unist-util-visit'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

export const parseMarkdown = async (path) => {
  const file = fs.readFileSync(path, 'utf8')

  let toc = []

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
      .use(rehypeStringify)
      .process(file)
  ).toString()

  return {content, toc}
}
