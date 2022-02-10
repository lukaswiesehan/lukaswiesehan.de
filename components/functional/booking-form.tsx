import {useState, useEffect} from 'react'
import useSWR from 'swr'
import {fetcher} from '@lib/helpers/fetcher'

import {FadeIn} from '@components/functional/fade-in'
import {Icon} from '@components/elements/icon'
import {ParagraphHeading} from '@components/typography/paragraph-heading'
import {Paragraph} from '@components/typography/paragraph'
import {Calendar} from '@components/elements/calendar'
import {SlotSelection} from '@components/elements/slot-selection'
import {Button} from '@components/elements/button'

import {Slot} from '@lib/types/slot'

export const BookingForm = () => {
  const {data, error} = useSWR<{slots: Slot[]}>('/api/calendar/slots', fetcher)
  const [selectedDate, setSelectedDate] = useState({
    year: -1,
    month: -1,
    day: -1
  })
  const [year, setYear] = useState(new Date().getFullYear())
  const [[month, monthDirection], setMonth] = useState([new Date().getMonth() + 1, 1])
  const [[date, dateDirection], setDate] = useState([-1, 1])
  const [slot, setSlot] = useState('')

  return (
    <div className="-ml-4 grid grid-cols-1 gap-y-8 gap-x-0.5 md:-mr-4 md:grid-cols-2 lg:ml-0">
      <FadeIn direction="up">
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
      </FadeIn>
      <FadeIn direction="up">
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
      </FadeIn>
      <FadeIn direction="up" className="md:col-span-2">
        <div className="mt-8 md:mt-0 md:flex md:justify-end">
          <Button type="primary" text="Termin auswählen" action={() => console.log('Go!')} disabled={!slot} />
        </div>
      </FadeIn>
    </div>
  )
}
