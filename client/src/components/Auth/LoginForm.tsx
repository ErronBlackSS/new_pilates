import React, { FC, useContext } from 'react'
import InputItem from './InputItem'
import { Context } from '../../index'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks/UseInput'
import { Link } from 'react-router-dom'

const LoginForm: FC = () => {

  const { user } = useContext(Context)

  const email = useInput({initialvalue: '', validations: {isEmpty: true, isEmail: true}})
  const password = useInput({initialvalue: '', validations: {isEmpty: true, minLength: 6}})

  const formDisabled = !email.inputValid || !password.inputValid
  const navigate = useNavigate()
  const formRef = React.useRef()

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    user.login(email.value, password.value)
    navigate('/')
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left min-w-[300px]">
          <form
            ref={formRef}
            onSubmit={onSubmit}>
            <div className="mt-4">
              <InputItem
                label="Почта"
                type="email"
                name="email"
                placeholder="Введите почту"
                onBlur={email.onBlur}
                onChange={email.onChange} 
              />
              {email.isDirty && email.isEmptyError && <div className="text-red text-[12px]">Поле не может быть пустым</div>}
              {email.isDirty && email.emailError && <div className="text-red text-[12px]">Некорректный email</div>}
              <InputItem
                label="Пароль"
                type="password"
                name="password"
                placeholder="Введите пароль"
                onBlur={password.onBlur}
                onChange={password.onChange}
              />
              {password.isDirty && password.isEmptyError && <div className="text-red text-[12px]">Поле не может быть пустым</div>}
              {password.isDirty && password.minLengthError && <div className="text-red text-[12px]">Минимальная длина пароля 6 символов</div>}
              <Link
                to="/reset"
              >
                Забыли пароль?
              </Link>
              <button
                disabled={formDisabled}
                className="w-[100%] px-6 py-2 mt-4 text-[#fff] rounded-[10px] bg-bordo"
              >
                Войти
              </button>
              <div className="mt-3 text-center text-[16px] leading-[20px]">
                <span className="text-gray">
                  Ещё нет аккаунта?
                </span>
                &nbsp;
                <Link
                  className="underline"
                  to="/registration"
                >
                  Зарегистрироваться
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default observer(LoginForm)