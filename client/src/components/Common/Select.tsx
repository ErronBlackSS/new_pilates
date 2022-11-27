import { useRef, useState, FC, useEffect } from 'react'
import { useOnClickOutside } from '../../Hooks/UseClickOutside'

interface ISelect {
  options: Array<{ value: number, label: string }>
  onSelect: (option: { value: number, label: string }) => void
  label: string
  defaultValue?: { value: number, label: string }
}

const Select: FC<ISelect> = ({ options, label, onSelect, defaultValue }) => {

  const [value, setValue] = useState(defaultValue ?? { value: '', label: '' })
  const [opened, setOpened] = useState(false)
  const list = useRef(null)

  const handleSelect = (option) => {
    setValue(option)
    onSelect(option)
    setOpened(false)
  }

  useOnClickOutside(list, () => { setOpened(false) })

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const rounded = (index) => index === 0 ? ' rounded-t-[10px]' : index === options.length-1 ? ' rounded-b-[10px]' : ''

  return (
    <div
      className="relative"
      ref={list}
    >
      <label
        className="block ml-[10px] text-[12px] leading-[15px] text-[#000000]"
      >
        {label}
      </label>
      <div
        onClick={() => setOpened(!opened)}
        className="flex items-center px-[15px] text-[16px] h-[50px] w-[350px] bg-[#F2F2F3] cursor-pointer rounded-[10px]"
      >
        <div className="flex flex-row cursor-pointer justify-between items-center w-full">
          <input value={value.label} type="text" disabled />
          <svg
            className="cursor-pointer"
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7.5 7L14 1"
              stroke="#1B1B1B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {opened && <ul
        className="mt-[5px] absolute top-[100%] w-[350px] transition duration-300 max-h-[300px] overflow-y-auto overflow-x-hidden"
        style={{ zIndex: 100 }}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            className={'flex px-[15px] items-center text-[16px] h-[50px] w-[350px] align-center bg-[#FFF] text-left cursor-pointer' + rounded(index)}
            onClick={() => handleSelect(option)}
          >
            <p>{option.label}</p>
          </li>
        ))}
      </ul>}
    </div>
  )
}

export default Select