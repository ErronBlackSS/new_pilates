import { SetStateAction, useState } from 'react'
import { useValidation } from './UseValidation'

interface IUseInput {
  initialvalue: string
  validations: Object
}

export const useInput = ({ initialvalue, validations } : IUseInput) => {
  const [value, setValue] = useState<string>(initialvalue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation({ value, validations })

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  const onBlur = (): void => {
    setDirty(true)
  }

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...valid
  }
}