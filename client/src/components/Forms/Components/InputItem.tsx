import { FC } from 'react'
import { IValidation } from '../../../Hooks/UseValidation'

interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
  validations: IValidation
  dirty: boolean
  onBlur: () => void
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void
}

const InputItem: FC<InputItemProps> = ( { label, type, name, placeholder, validations, dirty, onBlur, onChange } ) => {
  
  const errors = []
  Object.keys(validations).forEach((key) => { 
    if(validations[key]?.status === true && dirty) errors.push(validations[key])
  })

  return (
    <div className="py-[10px]">
      <label
        className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onBlur={onBlur}
        onChange={onChange}
        className="w-full px-4 py-2 mt-2 rounded-md border border-[#8A8E97]"
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {errors && errors.map((error, index) => {
        return (
          <div
            key={index}
            className="text-red text-[12px]"
          >
            {error.message}
          </div>
        )
      })}
    </div>
  )
}

export default InputItem