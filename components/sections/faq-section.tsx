import {useRouter} from 'next/router'
import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {trackGoal} from 'fathom-client'

import {Section} from '@components/layout/section'
import {FadeIn} from '@components/functional/fade-in'
import {Heading} from '@components/typography/heading'
import {Subheading} from '@components/typography/subheading'
import {HeadingBody} from '@components/typography/heading-body'
import {Button} from '@components/elements/button'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'

import {FAQ as FAQType} from '@content/faqs'

type FAQSectionProps = {
  faqs: FAQType[]
}

export const FAQSection = ({faqs}: FAQSectionProps) => {
  const router = useRouter()
  const [[selectedQuestion, direction], setSelectedQuestion] = useState([0, 1])

  const answerVariants = {
    enter: (direction: number) => {
      return {y: `${direction * 101}%`, opacity: 0}
    },
    selected: {y: 0, opacity: 1},
    exit: {y: '-101%', opacity: 0},
  }

  const answerBoxVariants = {
    selected: {height: 'auto'},
    notSelected: {height: 0},
  }

  const clickCTA = () => {
    trackGoal('3HDTIYXV', 0)
    router.push('/contact')
  }

  const clickEmail = () => {
    trackGoal('LEEIJUJM', 0)
  }

  const clickQuestion = (index) => {
    trackGoal('G10BT4XS', 0)
    setSelectedQuestion([
      selectedQuestion == index ? -1 : index,
      selectedQuestion == -1 ? -1 : index > selectedQuestion ? 1 : -1,
    ])
  }

  return (
    <Section
      backgroundHeight="full"
      className="pt-20 lg:pt-28 xl:pt-32 2xl:pt-40"
    >
      <div className="col-span-1 px-4 md:col-span-2 lg:max-w-md 2xl:max-w-xl">
        <FadeIn direction="up">
          <Subheading>Damit nichts unklar bleibt</Subheading>
          <Heading className="max-w-xl">Häufige Fragen & Antworten</Heading>
        </FadeIn>
        <FadeIn direction="up">
          <HeadingBody className="mt-8 md:max-w-xl lg:mt-12">
            In meiner Arbeit setze ich auf volle Transparenz. Hier findest Du
            Antworten auf häufige Fragen, die Du dir vielleicht auch noch
            stellst. Sollte noch etwas offen bleiben, stehe ich Dir im Gespräch
            oder per Email zur Verfügung!
          </HeadingBody>
          <div className="mt-8 space-y-4 sm:flex sm:items-start sm:space-y-0 sm:space-x-8">
            <Button
              type="primary"
              text="Gespräch vereinbaren"
              action={clickCTA}
              loading={false}
            />
            <div>
              <Button
                type="secondary"
                text="Email schreiben"
                action={clickEmail}
                loading={false}
              />
            </div>
          </div>
        </FadeIn>
      </div>
      <ul className="col-span-1 space-y-6 pr-4 pt-4 md:col-span-2 md:pt-9">
        {faqs.map(({question, answer, action}, index) => (
          <li key={index} className="block">
            <FadeIn direction="up">
              <div
                className="group flex cursor-pointer justify-between space-x-4 hover:text-slate-900/70"
                onClick={() => clickQuestion(index)}
              >
                <ParagraphHeading
                  text={
                    <span className="group-hover:text-slate-900/70">
                      {question}
                    </span>
                  }
                  className="border-blue-300"
                />
                <motion.svg
                  animate={{rotateZ: selectedQuestion == index ? 90 : 0}}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className="mt-1 flex-shrink-0 fill-current text-blue-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.26953 18.7451C5.91797 18.7451 5.60547 18.6279 5.37109 18.3936C4.86328 17.9248 4.86328 17.1045 5.37109 16.6357L11.9727 9.99512L5.37109 3.39355C4.86328 2.9248 4.86328 2.10449 5.37109 1.63574C5.83984 1.12793 6.66016 1.12793 7.12891 1.63574L14.6289 9.13574C15.1367 9.60449 15.1367 10.4248 14.6289 10.8936L7.12891 18.3936C6.89453 18.6279 6.58203 18.7451 6.26953 18.7451Z" />
                </motion.svg>
              </div>
              <motion.div
                className="overflow-y-hidden"
                animate={selectedQuestion == index ? 'selected' : 'notSelected'}
                variants={answerBoxVariants}
              >
                <AnimatePresence initial={false} custom={direction}>
                  {selectedQuestion == index && (
                    <motion.div
                      initial="enter"
                      animate="selected"
                      exit="exit"
                      variants={answerVariants}
                      custom={direction}
                    >
                      <Paragraph>
                        {answer}
                        {action && (
                          <span className="block">
                            <Button
                              type="secondary"
                              text={action.text}
                              action={() => router.push(action.url)}
                              loading={false}
                            />
                          </span>
                        )}
                      </Paragraph>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </Section>
  )
}
