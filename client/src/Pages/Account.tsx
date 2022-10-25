import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

  const { user } = useContext(Context)
  const navigate = useNavigate()

  const logoutHandler = (): void => {
    user.logout()
    navigate('/')
  }

  return (
    <div className="ml-[400px]">
      <h1>Account</h1>
      <h2>{user.user.email}</h2>
      <button onClick={logoutHandler} className="px-4 py-2 border rounded-[20px] bg-gray-400">
        Выйти из аккаунта
      </button>
    </div>
  )
}

export default observer(Account)