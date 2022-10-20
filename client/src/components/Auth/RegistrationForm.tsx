import { FC } from 'react'
import React from 'react'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import InputItem from './InputItem'
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
  const formDisabled = !name.inputValid || !email.inputValid || !password.inputValid || !lastname.inputValid || !phone.inputValid || !passwordConfirm.inputValid || !passwordIdentity

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
        <div className="text-left min-w-[300px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4 form-flex md:gap-1 xl:gap-3">
              <div className="flex flex-col">
                <InputItem
                  label="Имя"
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  onBlur={name.onBlur}
                  onChange={name.onChange}
                />
                {name.isDirty && name.isEmptyError && <div className="text-red text-[12px]">Поле не может быть пустым</div>}
                {name.isDirty && name.minLengthError && <div className="text-red text-[12px]">Минимальная длина 2 символа</div>}
                <InputItem
                  label="Фамилия"
                  type="text"
                  name="lastname"
                  placeholder="Введите фамилию"
                  onBlur={lastname.onBlur}
                  onChange={lastname.onChange}
                />
                {lastname.isDirty && lastname.isEmptyError && <div className="text-red text-[12px]">Поле не может быть пустым</div>}
                {lastname.isDirty && lastname.minLengthError && <div className="text-red text-[12px]">Минимальная длина 2 символа</div>}
                <InputItem
                  label="Телефон"
                  type="text"
                  name="phone"
                  placeholder="Введите телефон"
                  onBlur={phone.onBlur}
                  onChange={phone.onChange}
                />
                {phone.isDirty && phone.isEmptyError && <div className="text-red text-[12px]">Поле не может быть пустым</div>}
                {phone.isDirty && phone.phoneError && <div className="text-red text-[12px]">Некорректный номер телефона</div>}
              </div>
              <div className="flex flex-col">
                <InputItem
                  label="Email"
                  type="text"
                  name="email"
                  placeholder="Введите email"
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
                {password.isDirty && password.minLengthError && <div className="text-red text-[12px]">Минимальная длина 6 символов</div>}
                <InputItem
                  label="Подтвердите пароль"
                  type="password"
                  name="passwordConfirm"
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
              className="w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo"
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
            {formSended && <div style={{color: 'green'}}>Форма отправлена</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default observer(RegistationForm)