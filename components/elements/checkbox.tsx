import {Dispatch, SetStateAction, ReactNode} from 'react'

type CheckboxProps = {
  id: string
  label: string
  required?: boolean | false
  data: any
  setData: Dispatch<SetStateAction<{}>>
  children: ReactNode
  className?: string
}

export const Checkbox = ({id, children, data, setData, required, className}: CheckboxProps) => {
  const handleChange = (e) => {
    let currentData = {...data}
    currentData[id] = e.target.checked
    setData(currentData)
  }

  return (
    <div className={`flex items-start space-x-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={data[id]}
        onChange={handleChange}
        required={required}
        className="h-5 w-5 rounded-md border border-slate-400 bg-white/50 text-indigo-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-0"
      />
      <label htmlFor={id} className="text-sm">
        {children}
      </label>
    </div>
  )
}
