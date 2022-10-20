import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import InputItem from './InputItem'
import { useInput } from '../../hooks/UseInput'
import AuthService from '../../services/AuthService'

interface IResetSendForm {
  user_id: number
}

const ResetSendForm: FC<IResetSendForm> = ({ user_id }) => {

  const password = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const passwordConfirm = useInput({initialvalue: '', validations: { firstPassword: password.value, isEmpty: true, minLength: 6 } })
  const passwordIdentity = password.value === passwordConfirm.value

  const navigate = useNavigate()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    AuthService.resetSend(user_id, password.value)
    navigate('/login')
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left min-w-[300px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
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
              <button
                disabled={!passwordIdentity || !password.inputValid || !passwordConfirm.inputValid}
                className="w-[100%] px-6 py-2 mt-4 text-[#fff] rounded-[10px] bg-bordo"
              >
                Восстановить пароль
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetSendForm