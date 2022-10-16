import { FC } from 'react'
import React from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import InputItem from './InputItem'
import { useInput } from '../../hooks/UseInput'
import { useState } from 'react'
interface AuthProps {
  switchToLogin: () => void
}

const RegistationForm: FC<AuthProps> = ({ switchToLogin }: AuthProps) => {
  
  const { user } = React.useContext(Context)
  
  const name = useInput('', {isEmpty: true, minLength: 2})
  const email = useInput('', {isEmpty: true, minLength: 5, isEmail: true})
  const password = useInput('', {isEmpty: true, minLength: 5})
  const lastname = useInput('', {isEmpty: true, minLength: 2})
  const phone = useInput('', {isEmpty: true, minLength: 5, isPhone: true})
  const passwordConfirm = useInput('', {})

  const [formSended, setFormSended] = useState(false)
  const formDisabled = !name.inputValid || !email.inputValid || !password.inputValid || !lastname.inputValid || !phone.inputValid || !passwordConfirm.inputValid
  const passwordIdentity = password.value === passwordConfirm.value

  const formRef = React.useRef()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      lastname: { value: string }
      email: { value: string }
      phone: { value: string }
      password: { value: string }
    }
    const email = target.email.value
    const password = target.password.value
    const name = target.name.value
    const lastname = target.lastname.value
    const phone = target.phone.value
    user.registration(name, lastname, phone, email, password)
    setFormSended(true)
  }

  return (
    <div className="flex items-center justify-center">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3
          className="text-2xl font-bold text-center"
        >
            Войти в аккаунт
        </h3>
        <form
          ref={formRef}
          onSubmit={onSubmit}>
          <div className="mt-4">
            <InputItem
              label="Имя"
              type="text"
              name="name"
              placeholder="Введите имя"
              onBlur={name.onBlur}
              onChange={name.onChange}
            />
            {name.isDirty && name.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {name.isDirty && name.minLengthError && <div style={{color: 'red'}}>Минимальная длина 2 символа</div>}
            <InputItem
              label="Фамилия"
              type="text"
              name="lastname"
              placeholder="Введите фамилию"
              onBlur={lastname.onBlur}
              onChange={lastname.onChange}
            />
            {lastname.isDirty && lastname.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {lastname.isDirty && lastname.minLengthError && <div style={{color: 'red'}}>Минимальная длина 2 символа</div>}
            <InputItem
              label="Телефон"
              type="text"
              name="phone"
              placeholder="Введите телефон"
              onBlur={phone.onBlur}
              onChange={phone.onChange}
            />
            {phone.isDirty && phone.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {phone.isDirty && phone.minLengthError && <div style={{color: 'red'}}>Минимальная длина 5 символов</div>}
            {phone.isDirty && phone.phoneError && <div style={{color: 'red'}}>Некорректный номер телефона</div>}
            <InputItem
              label="Email"
              type="text"
              name="email"
              placeholder="Введите email"
              onBlur={email.onBlur}
              onChange={email.onChange}
            />
            {email.isDirty && email.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {email.isDirty && email.minLengthError && <div style={{color: 'red'}}>Минимальная длина 5 символов</div>}
            {email.isDirty && email.emailError && <div style={{color: 'red'}}>Некорректный email</div>}
            <InputItem
              label="Пароль"
              type="password"
              name="password"
              placeholder="Введите пароль"
              onBlur={password.onBlur}
              onChange={password.onChange}
            />
            {password.isDirty && password.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {password.isDirty && password.minLengthError && <div style={{color: 'red'}}>Минимальная длина 5 символов</div>}
            <InputItem
              label="Подтвердите пароль"
              type="password"
              name="passwordConfirm"
              placeholder="Подтвердите пароль"
              onBlur={passwordConfirm.onBlur}
              onChange={passwordConfirm.onChange}
            />
            {!passwordIdentity && password.isDirty && passwordConfirm.isDirty && <div style={{color: 'red'}}>Пароли не совпадают</div>}
            <div className="mt-3">
              <button onClick={switchToLogin}>Войти</button>
            </div>
            <div className="flex items-baseline justify-between">
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Зарегистрироваться</button>
            </div>
            {formSended && <div style={{color: 'green'}}>Форма отправлена</div>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default observer(RegistationForm)