import { FC } from 'react'
import React from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import InputItem from './Components/InputItem'
import { useInput } from '../../hooks/UseInput'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegistationForm: FC = () => {
  
  const { user } = React.useContext(Context)
  
  const name = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 2 } }) 
  const email = useInput({initialvalue: '', validations: { isEmpty: true, isEmail: true } })
  const password = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const lastname = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 2 }})
  const phone = useInput({initialvalue: '', validations: { isEmpty: true, isPhone: true } })
  const passwordConfirm = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const [errorMessage, setErrorMessage] = useState('')

  const [formSended, setFormSended] = useState(false)
  const passwordIdentity = password.value === passwordConfirm.value
  const formDisabled = 
    !name.validations.inputValid ||
    !email.validations.inputValid || 
    !password.validations.inputValid || 
    !lastname.validations.inputValid || 
    !phone.validations.inputValid || 
    !passwordConfirm.validations.inputValid || 
    !passwordIdentity

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const status = await user.registration(name.value, lastname.value, phone.value, email.value, password.value)
    if (status === 'success') {
      setFormSended(true)
    } else {
      setErrorMessage(status)
    }
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        {formSended ? 
          <div
            className="w-[300px] h-[300px] flex flex-col justify-center items-center"
          >
            Вам на почту отправленно письмо с подтверждением
          </div>
          :
          <div className="text-left min-w-[300px]">
            <form
              onSubmit={onSubmit}>
              <div className="mt-4 form-flex md:gap-1 xl:gap-3">
                <div className="flex flex-col">
                  <InputItem
                    label="Имя"
                    type="text"
                    name="name"
                    validations={name.validations}
                    dirty={name.isDirty}
                    placeholder="Введите имя"
                    onBlur={name.onBlur}
                    onChange={name.onChange}
                  />
                  <InputItem
                    label="Фамилия"
                    type="text"
                    name="lastname"
                    validations={lastname.validations}
                    dirty={lastname.isDirty}
                    placeholder="Введите фамилию"
                    onBlur={lastname.onBlur}
                    onChange={lastname.onChange}
                  />
                  <InputItem
                    label="Телефон"
                    type="text"
                    name="phone"
                    validations={phone.validations}
                    dirty={phone.isDirty}
                    placeholder="Введите телефон"
                    onBlur={phone.onBlur}
                    onChange={phone.onChange}
                  />
                </div>
                <div className="flex flex-col">
                  <InputItem
                    label="Email"
                    type="text"
                    name="email"
                    validations={email.validations}
                    dirty={email.isDirty}
                    placeholder="Введите email"
                    onBlur={email.onBlur}
                    onChange={email.onChange}
                  />
                  <InputItem
                    label="Пароль"
                    type="password"
                    name="password"
                    validations={password.validations}
                    dirty={password.isDirty}
                    placeholder="Введите пароль"
                    onBlur={password.onBlur}
                    onChange={password.onChange}
                  />
                  <InputItem
                    label="Подтвердите пароль"
                    type="password"
                    name="passwordConfirm"
                    dirty={passwordConfirm.isDirty}
                    validations={passwordConfirm.validations}
                    placeholder="Подтвердите пароль"
                    onBlur={passwordConfirm.onBlur}
                    onChange={passwordConfirm.onChange}
                  />
                  {!passwordIdentity && password.isDirty && passwordConfirm.isDirty && <div style={{color: 'red'}}>Пароли не совпадают</div>}
                </div>
              </div>
              {errorMessage && <div className="text-red text-[12px]">{errorMessage}</div>}
              <button
                disabled={formDisabled}
                onSubmit={onSubmit}
                className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
              >
              Зарегистрироваться
              </button>
              <div className="mt-3 text-center text-[16px] leading-[20px]">
                <span className="text-gray">
                  Уже есть аккаунт?
                </span>
              &nbsp;
                <Link
                  className="underline"
                  to="/login"
                >
                Войти
                </Link>
              </div>
            </form>
          </div>}
      </div>
    </div>
  )
}

export default observer(RegistationForm)