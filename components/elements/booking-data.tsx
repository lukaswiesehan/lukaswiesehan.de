import {Dispatch, SetStateAction} from 'react'

import {Input} from '@components/elements/input'

type BookingDataProps = {
  data: any
  setData: Dispatch<SetStateAction<{}>>
}

export const BookingData = ({data, setData}: BookingDataProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
      <Input
        id="email"
        label="Deine Email-Adresse"
        placeholder="john.doe@email.com"
        type="email"
        data={data}
        setData={setData}
        autocomplete="email"
        required
      />
    </div>
  )
}
