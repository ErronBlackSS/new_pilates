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

  const onChange = (e: { target: {
    [x: string]: any; value: SetStateAction<string> 
} }): void => {
    if (e.target?.files) {
      setValue(e.target.files[0])
    } else {
      setValue(e.target.value)
    }
  }

  const onBlur = (): void => {
    setDirty(true)
  }

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    validations: { ...valid }
  }
}