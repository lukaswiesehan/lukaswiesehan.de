import {Dispatch, SetStateAction} from 'react'

type InputProps = {
  id: string
  label: string
  placeholder: string
  type: string
  required?: boolean | false
  data: any
  setData: Dispatch<SetStateAction<{}>>
  autocomplete?: string
  className?: string
}

export const Input = ({id, label, placeholder, type, data, setData, required, autocomplete, className}: InputProps) => {
  const handleChange = (e) => {
    let currentData = {...data}
    currentData[id] = e.target.value
    setData(currentData)
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm">
        {label}
        {required && <span className="font-black text-indigo-400"> *</span>}
      </label>
      <input
        name={id}
        id={id}
        type={type}
        autoComplete={autocomplete}
        placeholder={placeholder}
        value={data[id]}
        onChange={handleChange}
        required={required}
        className="focu:ring-indigo-300 flex h-10 w-full items-center rounded-md border border-slate-300 bg-white/50 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2"
      />
    </div>
  )
}
