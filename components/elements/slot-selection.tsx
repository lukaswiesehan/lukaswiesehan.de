import {motion, AnimatePresence} from 'framer-motion'
import {getMonthName} from '@lib/helpers/get-month-name'
import {formatTime} from '@lib/helpers/format-time'

import {Loader} from '@components/elements/loader'

import {Slot} from '@lib/types/slot'
import {Dispatch, SetStateAction} from 'react'

type SlotSelectionProps = {
  slots: Slot[]
  year: number
  month: number
  date: number
  dateDirection: number
  loading: boolean
  slot: string
  setSlot: Dispatch<SetStateAction<{}>>
}

export const SlotSelection = ({slots, year, month, date, dateDirection, loading, slot, setSlot}: SlotSelectionProps) => {
  const elementVariants = {
    enter: (direction: number) => {
      return {x: `${direction * 101}%`}
    },
    selected: {x: 0},
    exit: (direction: number) => {
      return {x: `${direction * -101}%`}
    }
  }

  if (loading) {
    return (
      <div className="mt-4 flex h-[252px] max-w-[248px] items-center justify-center md:mt-8 lg:h-[228px] 2xl:h-[252px]">
        <Loader className="text-indigo-300" />
      </div>
    )
  } else {
    const availableSlots = slots.filter((s) => s.start.year == year && s.start.month == month && s.start.day == date)
    return (
      <div className="mt-4 px-4 md:mt-8">
        <div className="relative mb-2 h-8 overflow-x-hidden text-slate-900">
          <AnimatePresence initial={false} custom={dateDirection}>
            <motion.p
              key={date}
              className="absolute flex h-8 w-full items-center font-bold"
              initial="enter"
              animate="selected"
              exit="exit"
              variants={elementVariants}
              custom={dateDirection}
            >
              {date == -1 ? 'Kein Datum ausgewählt' : `${date}. ${getMonthName(year, month)} ${year}`}
            </motion.p>
          </AnimatePresence>
        </div>
        <AnimatePresence initial={false} custom={dateDirection}>
          <motion.ul className="space-y-1 overflow-x-hidden">
            {availableSlots.map(({id, start, end}, index) => (
              <motion.li key={date * 100 + index} initial="enter" animate="selected" exit="exit" variants={elementVariants} custom={dateDirection}>
                <button
                  type="button"
                  onClick={() => setSlot(id)}
                  className={`flex h-8 items-center rounded-full px-3 font-bold lg:h-7 lg:text-sm 2xl:h-8 2xl:text-base ${
                    slot == id ? 'bg-indigo-500 text-slate-100' : 'bg-indigo-200/80 text-indigo-900 hover:bg-indigo-200'
                  }`}
                >
                  {`${formatTime(start.hours, start.minutes)} – ${formatTime(end.hours, end.minutes)}`}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    )
  }
}
