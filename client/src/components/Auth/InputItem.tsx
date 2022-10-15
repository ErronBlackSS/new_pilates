import { FC } from 'react'
import { useInput } from '../../hooks/UseInput'
import { INPUT_VALIDATORS } from '../../utils/constance'
interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
}

const InputItem: FC<InputItemProps> = ({ label, type, name, placeholder }: InputItemProps) => {

  const field = useInput('', INPUT_VALIDATORS[name])

  const showError = !field.inputValid && field.isDirty && field.errorText

  return (
    <>
      <div>
        <label
          className="block"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          onBlur={field.onBlur}
          onChange={field.onChange}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
      {showError && <span className="text-red-500">{field.errorText}</span>}
    </>
  )
}

export default InputItem