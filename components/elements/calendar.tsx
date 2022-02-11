import {motion, AnimatePresence} from 'framer-motion'
import {getMonthName} from '@lib/helpers/get-month-name'
import {getDaysOffset} from '@lib/helpers/get-days-offset'
import {getDayCount} from '@lib/helpers/get-day-count'

import {Loader} from '@components/elements/loader'

import {Slot} from '@lib/types/slot'
import {Dispatch, SetStateAction} from 'react'

type CalendarProps = {
  slots: Slot[]
  loading: boolean
  year: number
  setYear: Dispatch<SetStateAction<{}>>
  month: number
  monthDirection: number
  setMonth: Dispatch<SetStateAction<{}>>
  date: number
  setDate: Dispatch<SetStateAction<{}>>
  setSlot: Dispatch<SetStateAction<{}>>
}

export const Calendar = ({slots, loading, year, setYear, month, monthDirection, setMonth, date, setDate, setSlot}: CalendarProps) => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDate = new Date().getDate()

  const monthVariants = {
    enter: (direction: number) => {
      return {x: `${direction * 101}%`}
    },
    selected: {x: 0},
    exit: (direction: number) => {
      return {x: `${direction * -101}%`}
    }
  }

  const selectMonth = (direction) => {
    if (month == 12 && direction == 1) {
      setYear(year + 1)
      setMonth([1, 1])
    } else if (month == 1 && direction == -1) {
      setYear(year - 1)
      setMonth([12, -1])
    } else {
      setMonth([month + direction, direction])
    }
    setDate([-1, direction])
    setSlot('')
  }

  const selectDate = (day) => {
    setDate([day, day > date ? 1 : -1])
    setSlot('')
  }

  if (loading) {
    return (
      <div className="mt-4 flex h-[252px] max-w-[248px] items-center justify-center md:mt-8 lg:h-[228px] 2xl:h-[252px]">
        <Loader className="text-indigo-300" />
      </div>
    )
  } else {
    const availableDays = slots.filter((s) => s.start.month == month && s.start.year == year).map((s) => s.start.day)
    return (
      <div className="mt-4 max-w-[280px] px-4 md:mt-8 lg:max-w-[252px] 2xl:max-w-[280px]">
        <div className="mb-2 flex items-center justify-between text-slate-900">
          <div className="relative h-8 w-full overflow-x-hidden">
            <AnimatePresence initial={false} custom={monthDirection}>
              <motion.p
                key={month}
                className="absolute flex h-8 w-full items-center font-bold"
                initial="enter"
                animate="selected"
                exit="exit"
                variants={monthVariants}
                custom={monthDirection}
              >
                {`${getMonthName(month)} ${year}`}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              className={`flex h-8 items-center rounded-full ${
                month == currentMonth && year == currentYear ? 'text-slate-900/30' : 'hover:text-slate-900/70'
              }`}
              onClick={() => selectMonth(-1)}
              disabled={month == currentMonth && year == currentYear}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className="rotate-180 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.26953 18.7451C5.91797 18.7451 5.60547 18.6279 5.37109 18.3936C4.86328 17.9248 4.86328 17.1045 5.37109 16.6357L11.9727 9.99512L5.37109 3.39355C4.86328 2.9248 4.86328 2.10449 5.37109 1.63574C5.83984 1.12793 6.66016 1.12793 7.12891 1.63574L14.6289 9.13574C15.1367 9.60449 15.1367 10.4248 14.6289 10.8936L7.12891 18.3936C6.89453 18.6279 6.58203 18.7451 6.26953 18.7451Z" />
              </svg>
            </button>
            <button type="button" className="flex h-8 items-center rounded-full" onClick={() => selectMonth(1)}>
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.26953 18.7451C5.91797 18.7451 5.60547 18.6279 5.37109 18.3936C4.86328 17.9248 4.86328 17.1045 5.37109 16.6357L11.9727 9.99512L5.37109 3.39355C4.86328 2.9248 4.86328 2.10449 5.37109 1.63574C5.83984 1.12793 6.66016 1.12793 7.12891 1.63574L14.6289 9.13574C15.1367 9.60449 15.1367 10.4248 14.6289 10.8936L7.12891 18.3936C6.89453 18.6279 6.58203 18.7451 6.26953 18.7451Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative h-[212px] overflow-x-hidden lg:h-[188px] lg:text-sm 2xl:h-[212px] 2xl:text-base">
          <AnimatePresence initial={false} custom={monthDirection}>
            <motion.div
              key={month}
              className="absolute grid grid-cols-7 grid-rows-6 gap-1"
              initial="enter"
              animate="selected"
              exit="exit"
              variants={monthVariants}
              custom={monthDirection}
            >
              {getDaysOffset(year, month) > 0 &&
                [...Array(getDaysOffset(year, month))].map((d, index) => <div key={index} className="h-7 w-7 rounded-full" />)}
              {[...Array(getDayCount(year, month))].map((d, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`${index + 1}. ${getMonthName(month)}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full lg:h-7 lg:w-7 2xl:h-8 2xl:w-8 ${
                    currentDate == index + 1 && month == currentMonth && year == currentYear && 'font-black text-slate-900'
                  } ${
                    availableDays.includes(index + 1) &&
                    `font-bold ${date == index + 1 ? 'bg-indigo-500 text-slate-100' : 'bg-indigo-200/80 text-indigo-900 hover:bg-indigo-200'}`
                  }`}
                  disabled={!availableDays.includes(index + 1)}
                  onClick={() => selectDate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )
  }
}
