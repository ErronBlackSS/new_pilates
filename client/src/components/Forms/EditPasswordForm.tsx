import { useInput } from '../../Hooks/UseInput'
import InputItemProfile from './Components/InputItemProfile'

const EditPasswordForm = () => {

  const oldPassword = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } }) 
  const newPassord = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const newPasswordConfirm = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 }})

  const formDisabled = 
    !oldPassword.validations.status ||
    !newPassord.validations.status || 
    !newPasswordConfirm.validations.status

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left mobile-above:w-[500px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
              <InputItemProfile
                label="Имя"
                type="password"
                name="name"
                defaultValue={oldPassword.value}
                validations={oldPassword.validations}
                dirty={oldPassword.isDirty}
                placeholder="Старый пароль"
                onBlur={oldPassword.onBlur}
                onChange={oldPassword.onChange}
              />
              <InputItemProfile
                label="Фамилия"
                type="password"
                name="lastname"
                defaultValue={newPassord.value}
                validations={newPassord.validations}
                dirty={newPassord.isDirty}
                placeholder="Новые пароль"
                onBlur={newPassord.onBlur}
                onChange={newPassord.onChange}
              />
              <InputItemProfile
                label="Телефон"
                type="password"
                name="phone"
                defaultValue={newPasswordConfirm.value}
                validations={newPasswordConfirm.validations}
                dirty={newPasswordConfirm.isDirty}
                placeholder="Подтвердите новый пароль"
                onBlur={newPasswordConfirm.onBlur}
                onChange={newPasswordConfirm.onChange}
              />
              <button
                disabled={formDisabled}
                className={ 'w-full px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
              >
                Сохранить изменения
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPasswordForm