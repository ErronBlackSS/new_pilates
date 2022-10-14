import { FC } from 'react'
import React from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { REGISTRATION_INPUTS } from '../../utils/constance'
import InputItem from './InputItem'
import { useNavigate } from 'react-router-dom'
interface AuthProps {
  switchToLogin: () => void
}

const RegistationForm: FC<AuthProps> = ({ switchToLogin }: AuthProps) => {
  
  const { user } = React.useContext(Context)
  const navigate = useNavigate()
  const formRef = React.useRef()

  const onSubmit = (e: React.SyntheticEvent) => {
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
    navigate('/')
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
            {REGISTRATION_INPUTS.map((input, index) => {
              return (
                <InputItem
                  key={index}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              )
            })}
            <div className="mt-3">
              <button onClick={switchToLogin}>Войти</button>
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Зарегистрироваться</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default observer(RegistationForm)