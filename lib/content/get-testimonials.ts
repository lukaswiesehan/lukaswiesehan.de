import {testimonials} from '@content/testimonials'

export const getTestimonials = () => {
  return testimonials
    .filter((t) => t.online)
    .map(({title, headline, body, image, article}) => {
      return {title, headline, body, image, article}
    })
}
