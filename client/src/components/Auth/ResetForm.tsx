import React, { FC } from 'react'
import InputItem from './InputItem'
import { Link } from 'react-router-dom'
import { useInput } from '../../hooks/UseInput'
import AuthService from '../../services/AuthService'

const ResetForm: FC = () => {

  const email = useInput({initialvalue: '', validations: {isEmpty: true, isEmail: true}})

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    AuthService.resetSendMail(email.value)
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left min-w-[300px]">
          <form
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
              <button
                disabled={!email.inputValid}
                className="w-[100%] px-6 py-2 mt-4 text-[#fff] rounded-[10px] bg-bordo"
              >
                Восстановить пароль
              </button>
              <div className="mt-3 text-center text-[16px] leading-[20px]">
                <Link
                  className="underline"
                  to="/login"
                >
                  Войти
                </Link>
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

export default ResetForm