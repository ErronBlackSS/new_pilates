import { useEffect, useState } from 'react'
import { MIN_LENGTH_ERROR, MAX_LENGTH_ERROR, EMAIL_ERROR, PHONE_ERROR, EMPTY_ERROR, DEFAULT } from './Utils/ValidationActions'
export interface IUseValidation {
  value: string
  validations: Object
}

export interface IValidation {
  isEmptyError: IValidator
  minLengthError: IValidator
  maxLengthError: IValidator
  emailError: IValidator
  phoneError: IValidator
  inputValid: boolean
}

interface IValidator {
  status: boolean
  message: string
}

export const useValidation = ({ value, validations }: IUseValidation ) => {
  const [isEmptyError, setEmptyError] = useState<IValidator>()
  const [minLengthError, setMinLengthError] = useState<IValidator>()
  const [maxLengthError, setMaxLengthError] = useState<IValidator>()
  const [emailError, setEmailError] = useState<IValidator>()
  const [phoneError, setPhoneError] = useState<IValidator>()
  const [inputValid, setInputValid] = useState<boolean>()

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
      case 'minLength':
        value.length < validations[validation] ? setMinLengthError(MIN_LENGTH_ERROR) : setMinLengthError(DEFAULT)
        break
      case 'isEmpty':
        value ? setEmptyError(DEFAULT) : setEmptyError(EMPTY_ERROR)
        break
      case 'maxLength':
        value.length > validations[validation] ? setMaxLengthError(MAX_LENGTH_ERROR) : setMaxLengthError(DEFAULT)
        break
      case 'isEmail':
        const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        mailRegExp.test(String(value).toLowerCase()) ? setEmailError(DEFAULT) : setEmailError(EMAIL_ERROR)
        break
      case 'isPhone':
        const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
        phoneRegExp.test(String(value).toLowerCase()) ? setPhoneError(PHONE_ERROR) : setPhoneError(DEFAULT)
        break
      default:
        break
      }
    }
  }, [validations, value])

  useEffect(() => {
    if (
      isEmptyError?.status ||
      minLengthError?.status ||
      maxLengthError?.status ||
      emailError?.status ||
      phoneError?.status
    ) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [isEmptyError, minLengthError, maxLengthError, emailError, phoneError])

  return {
    isEmptyError,
    minLengthError,
    maxLengthError,
    emailError,
    phoneError,
    inputValid
  } as IValidation
}
