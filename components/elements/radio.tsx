import {Dispatch, SetStateAction} from 'react'

type Option = {
  id: string
  value: string
}

type RadioProps = {
  id: string
  label: string
  options: Option[]
  data: any
  setData: Dispatch<SetStateAction<{}>>
  className?: string
}

export const Radio = ({id, label, options, data, setData, className}: RadioProps) => {
  const name = id

  const handleChange = (e) => {
    let currentData = {...data}
    currentData[id] = e.target.value
    setData(currentData)
  }

  return (
    <div className={className}>
      <p className="mb-1 block text-sm">{label}</p>
      <ul className="flex items-center space-x-4">
        {options.map(({id, value}, index) => (
          <li key={index} className="flex items-center space-x-1">
            <input
              type="radio"
              id={id}
              name={name}
              value={id}
              checked={data[name] == id}
              onChange={handleChange}
              className="border border-slate-400 bg-white/50 text-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-0"
            />
            <label htmlFor={id} className="text-slate-900">
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
