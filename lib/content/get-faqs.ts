import {FAQ, faqs} from '@content/faqs'

export const getFAQs = (): FAQ[] => {
  return faqs.filter((f) => f.online)
}
