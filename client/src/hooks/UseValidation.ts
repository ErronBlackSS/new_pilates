import { useEffect, useState } from 'react'

interface IUseValidation {
    value: string
    validations: Object
}

interface IValidation {
    isEmptyError: boolean
    minLengthError: boolean
    maxLengthError: boolean
    emailError: boolean
    passwordError: boolean
    phoneError: boolean
    inputValid: boolean
    errorText: string
}

export const useValidation = ({ value, validations }: IUseValidation ) => {
  const [isEmptyError, setEmptyError] = useState<boolean>(true)
  const [minLengthError, setMinLengthError] = useState<boolean>(false)
  const [maxLengthError, setMaxLengthError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [phoneError, setPhoneError] = useState<boolean>(false)
  const [inputValid, setInputValid] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
      case 'minLength':
        value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
        break
      case 'isEmpty':
        value ? setEmptyError(false) : setEmptyError(true)
        break
      case 'maxLength':
        value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
        break
      case 'isEmail':
        const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        mailRegExp.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
        break
      case 'isPassword':
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        passwordRegExp.test(String(value).toLowerCase()) ? setPasswordError(false) : setPasswordError(true)
        break
      case 'isPhone':
        const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/
        phoneRegExp.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
        break
      default:
        break
      }
    }
  }, [validations, value])

  useEffect(() => {
    if (isEmptyError || minLengthError || maxLengthError || emailError || passwordError || phoneError) {
      const errorText = isEmptyError ? 'Поле не может быть пустым' : minLengthError ? 'Минимальная длина поля 3 символа' : maxLengthError ? 'Максимальная длина поля 20 символов' : emailError ? 'Некорректный email' : passwordError ? 'Пароль должен содержать минимум 8 символов' : phoneError ? 'Некорректный номер телефона' : ''
      setErrorText(errorText)
      setInputValid(false)
    } else {
      setErrorText('')
      setInputValid(true)
    }
  }, [isEmptyError, minLengthError, maxLengthError, emailError, passwordError, phoneError])

  return {
    isEmptyError,
    minLengthError,
    maxLengthError,
    emailError,
    passwordError,
    phoneError,
    inputValid,
    errorText
  } as IValidation
}
