import { useState } from 'react'
import { useValidation } from './UseValidation'

export const useInput = (initialvalue: string, validations: Object) => {
  const [value, setValue] = useState<string>(initialvalue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation({ value, validations })

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = () => {
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