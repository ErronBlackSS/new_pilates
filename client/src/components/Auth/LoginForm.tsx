import React, { FC, useContext } from 'react'
import InputItem from './InputItem'
import { Context } from '../../index'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks/UseInput'
interface AuthProps {
  switchToRegistration: () => void
}

const LoginForm: FC<AuthProps> = ({ switchToRegistration }: AuthProps) => {

  const { user } = useContext(Context)

  const email = useInput('', {isEmpty: true, minLength: 5})
  const password = useInput('', {isEmpty: true, minLength: 5})

  const formDisabled = !email.inputValid || !password.inputValid
  const navigate = useNavigate()
  const formRef = React.useRef()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }
    const email = target.email.value
    const password = target.password.value
    user.login(email, password)
    navigate('/')
  }

  return (
    <div className="flex w-100 items-center justify-center">
      <div className="px-6 py-6 mt-4 text-left bg-white shadow-lg">
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
              label="Email"
              type="email"
              name="email"
              placeholder="Введите email"
              onBlur={email.onBlur}
              onChange={email.onChange} 
            />
            {email.isDirty && email.isEmptyError && <div style={{color: 'red'}}>Поле не может быть пустым</div>}
            {email.isDirty && email.minLengthError && <div style={{color: 'red'}}>Минимальная длина 5 символов</div>}
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
            <div className="mt-3">
                Нет аккаунта? - <button onClick={switchToRegistration}>Регистрация</button>
            </div>
            <div className="flex items-baseline justify-between">
              <button disabled={formDisabled} className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default observer(LoginForm)