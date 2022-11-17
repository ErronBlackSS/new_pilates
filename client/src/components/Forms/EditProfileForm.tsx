import { useInput } from '../../Hooks/UseInput'
import InputItem from './Components/InputItem'

const EditProfileForm = ({curName, curLastname, curEmail, curPhone }) => {

  const name = useInput({initialvalue: '', validations: { isEmpty: true, isName: true, maxLength: 30} }) 
  const email = useInput({initialvalue: '', validations: { isEmpty: true, isEmail: true } })
  const password = useInput({initialvalue: '', validations: { isEmpty: true, minLength: 6 } })
  const lastname = useInput({initialvalue: '', validations: { isEmpty: true, isLastName: true, maxLength: 30}})
  const phone = useInput({initialvalue: '', validations: { isEmpty: true, isPhone: true } })

 
  const formDisabled = 
    !name.validations.inputValid ||
    !email.validations.inputValid || 
    !password.validations.inputValid || 
    !lastname.validations.inputValid || 
    !phone.validations.inputValid

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <div className="text-left min-w-[300px]">
          <form
            onSubmit={onSubmit}>
            <div className="mt-4">
              <InputItem
                label="Имя"
                type="text"
                name="name"
                defaultValue={curName}
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
                defaultValue={curLastname}
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
                defaultValue={curPhone}
                validations={phone.validations}
                dirty={phone.isDirty}
                placeholder="Введите телефон"
                onBlur={phone.onBlur}
                onChange={phone.onChange}
              />
              <InputItem
                label="Почта"
                type="email"
                name="email"
                defaultValue={curEmail}
                validations={email.validations}
                dirty={email.isDirty}
                placeholder="Введите почту"
                onBlur={email.onBlur}
                onChange={email.onChange} 
              />
              <button
                disabled={formDisabled}
                className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
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

export default EditProfileForm