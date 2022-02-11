import {useState, useRef, useEffect} from 'react'
import useSWR from 'swr'
import {motion, AnimatePresence} from 'framer-motion'
import {useBreakpoint} from '@lib/helpers/use-breakpoint'
import {fetcher} from '@lib/helpers/fetcher'

import {FadeIn} from '@components/functional/fade-in'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {Calendar} from '@components/elements/calendar'
import {SlotSelection} from '@components/elements/slot-selection'
import {Button} from '@components/elements/button'
import {BookingData} from '@components/elements/booking-data'

import {Slot} from '@lib/types/slot'

export const BookingForm = () => {
  const breakpoint = useBreakpoint()

  const pages = {
    '1': useRef(null),
    '2': useRef(null)
  }

  const [year, setYear] = useState(new Date().getFullYear())
  const [[month, monthDirection], setMonth] = useState([new Date().getMonth() + 1, 1])
  const [[date, dateDirection], setDate] = useState([-1, 1])
  const [slot, setSlot] = useState('')
  const [height, setHeight] = useState(0)
  const [[page, pageDirection], setPage] = useState([1, 1])
  const [details, setDetails] = useState({name: '', email: ''})

  const {data, error} = useSWR<{slots: Slot[]}>('/api/calendar/slots', fetcher)

  const pageVariants = {
    enter: (direction: number) => {
      return {x: `${direction * 101}%`}
    },
    selected: {x: 0},
    exit: (direction: number) => {
      return {x: `${direction * -101}%`}
    }
  }

  useEffect(() => {
    setHeight(pages[`${page}`].current.clientHeight)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [page])

  return (
    <FadeIn direction="up" delay={breakpoint.md ? 0.1 : 0}>
      <div className="relative -ml-[1.125rem] overflow-x-hidden pl-0.5 md:-mr-4 lg:ml-0" style={{height}}>
        <AnimatePresence initial={false} custom={pageDirection}>
          {page == 1 && (
            <motion.div
              key={1}
              ref={pages['1']}
              className="absolute grid grid-cols-1 gap-y-8 gap-x-0.5 md:grid-cols-2"
              initial="enter"
              animate="selected"
              exit="exit"
              variants={pageVariants}
              custom={pageDirection}
            >
              <div>
                <Icon src="/icons/indigo-calendar-icon.svg" className="shadow-indigo-100" />
                <ParagraphHeading text="Datum auswählen" className="border-indigo-300" />
                <Paragraph>Wähle ein passendes Datum für unser Gespräch.</Paragraph>
                <Calendar
                  slots={data?.slots}
                  loading={!data}
                  year={year}
                  setYear={setYear}
                  month={month}
                  monthDirection={monthDirection}
                  setMonth={setMonth}
                  date={date}
                  setDate={setDate}
                  setSlot={setSlot}
                />
              </div>
              <div>
                <Icon src="/icons/indigo-clock-icon.svg" className="shadow-indigo-100" />
                <ParagraphHeading text="Uhrzeit auswählen" className="border-indigo-300" />
                <Paragraph>Wähle einen Zeitraum für unser Gespräch.</Paragraph>
                <SlotSelection
                  slots={data?.slots}
                  year={year}
                  month={month}
                  date={date}
                  dateDirection={dateDirection}
                  loading={!data}
                  slot={slot}
                  setSlot={setSlot}
                />
              </div>
              <div className="mt-8 px-4 md:col-span-2 md:mt-0 md:flex md:justify-end">
                <Button type="primary" text="Termin auswählen" action={() => setPage([2, 1])} disabled={!slot} />
              </div>
            </motion.div>
          )}
          {page == 2 && (
            <motion.div
              key={2}
              ref={pages['2']}
              className="absolute w-full space-y-8"
              initial="enter"
              animate="selected"
              exit="exit"
              variants={pageVariants}
              custom={pageDirection}
            >
              <div>
                <Icon src="/icons/indigo-clipboard-text-icon.svg" className="shadow-indigo-100" />
                <ParagraphHeading text="Details zum Gespräch" className="border-indigo-300" />
                <Paragraph>
                  Um bereits aus dem ersten Gespräch möglichst viel mitzunehmen, gib mir ein paar kurze Infos. So kann ich mich vorbereiten und Du
                  verschwendest keine Zeit.
                </Paragraph>
              </div>
              <BookingData data={details} setData={setDetails} />
              <div className="space-y-4 px-4 md:flex md:flex-row-reverse md:items-center md:space-y-0">
                <div className="md:ml-8">
                  <Button type="primary" text="Termin bestätigen" action={() => setPage([3, 1])} disabled={!slot} />
                </div>
                <div>
                  <Button type="secondary" text="Termin ändern" action={() => setPage([1, -1])} hideArrow />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}
