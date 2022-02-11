import {Dispatch, SetStateAction} from 'react'

import {Input} from '@components/elements/input'
import {Radio} from '@components/elements/radio'
import {Textarea} from '@components/elements/textarea'

type BookingDataProps = {
  data: any
  setData: Dispatch<SetStateAction<{}>>
}

export const BookingData = ({data, setData}: BookingDataProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 px-4 md:grid-cols-2">
      <Input id="name" label="Dein Name" placeholder="John Doe" type="text" data={data} setData={setData} autocomplete="name" required />
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
      <Radio
        id="setting"
        label="Welche Umgebung ist Dir lieber?"
        options={[
          {id: 'zoom', value: 'Zoom'},
          {id: 'phone', value: 'Telefon'}
        ]}
        data={data}
        setData={setData}
      />
      {data.setting == 'phone' && (
        <Input
          id="phone"
          label="Deine Telefonnummer"
          placeholder="0171 234 567 89"
          type="text"
          data={data}
          setData={setData}
          autocomplete="tel"
          required
        />
      )}
      <Input
        id="industry"
        label="In welcher Branche bist Du tätig?"
        placeholder="John Doe"
        type="text"
        data={data}
        setData={setData}
        required
        className="md:col-span-2"
      />
      <Textarea id="message" label="Details zu Deinem Produkt" placeholder="John Doe" data={data} setData={setData} className="md:col-span-2" />
    </div>
  )
}