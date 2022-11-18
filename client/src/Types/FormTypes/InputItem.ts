export interface IUseValidation {
    value: string
    validations: Object
  }
  
export interface IValidation {
  isEmptyError: IValidator
  minLengthError: IValidator
  maxLengthError: IValidator
  nameError: IValidator
  lastNameError: IValidator
  emailError: IValidator
  phoneError: IValidator
  inputValid: boolean
}
  
export interface IValidator {
  status: boolean
  message: string
}

export interface InputItemProps {
  label: string
  type: string
  name: string
  placeholder: string
  validations: IValidation
  dirty: boolean
  defaultValue?: string
  onBlur: () => void
  onChange: (e: React.FocusEvent<HTMLInputElement>) => void
}