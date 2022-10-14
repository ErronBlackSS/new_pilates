import React, { FC, useContext } from 'react'
import InputItem from './InputItem'
import { Context } from '../../index'
import {observer} from 'mobx-react-lite'
import { LOGIN_INPUTS } from '../../utils/constance'
import { useNavigate } from 'react-router-dom'

interface AuthProps {
  switchToRegistration: () => void
}

const LoginForm: FC<AuthProps> = ({ switchToRegistration }: AuthProps) => {

  const { user } = useContext(Context)
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
            {LOGIN_INPUTS.map((item, index) => {
              return (
                <InputItem
                  key={index}
                  label={item.label}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                />
              )
            })}
            <div className="mt-3">
                Нет аккаунта? - <button onClick={switchToRegistration}>Регистрация</button>
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Войти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default observer(LoginForm)