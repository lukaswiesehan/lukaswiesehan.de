import {Dispatch, SetStateAction} from 'react'

type TextareaProps = {
  id: string
  label: string
  placeholder: string
  required?: boolean | false
  data: any
  setData: Dispatch<SetStateAction<{}>>
  className?: string
}

export const Textarea = ({id, label, placeholder, data, setData, required, className}: TextareaProps) => {
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
      <textarea
        name={id}
        id={id}
        rows={4}
        placeholder={placeholder}
        value={data[id]}
        onChange={handleChange}
        required={required}
        className="w-full resize-none rounded-md border border-slate-400 bg-white/50 pt-2 text-slate-900 placeholder-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300"
      />
    </div>
  )
}
