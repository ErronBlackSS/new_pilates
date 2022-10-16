import { FC } from 'react'
interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
  onBlur: () => void
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void
}

const InputItem: FC<InputItemProps> = ({ label, type, name, placeholder, onBlur, onChange }: InputItemProps) => {
  return (
    <div>
      <label
        className="block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onBlur={onBlur}
        onChange={onChange}
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputItem