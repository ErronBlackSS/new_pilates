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
    </div>
  )
}

export default InputItem