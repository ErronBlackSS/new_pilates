import { FC } from 'react'

interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
}

const InputItem: FC<InputItemProps> = ({ label, type, name, placeholder }: InputItemProps) => {
  return (
    <div>
      <label
        className="block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputItem