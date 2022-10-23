import React, { FC } from 'react'
import InputItem from './Components/InputItem'
import { Link } from 'react-router-dom'
import { useInput } from '../../Hooks/UseInput'
import AuthService from '../../Services/AuthService'

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
                validations={email.validations}
                dirty={email.isDirty}
                placeholder="Введите почту"
                onBlur={email.onBlur}
                onChange={email.onChange} 
              />
              <button
                disabled={!email.validations.inputValid}
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