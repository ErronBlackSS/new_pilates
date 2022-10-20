import { useEffect, useState } from 'react'
import UserService from '../services/UserService'
import { useParams } from 'react-router-dom'
import ResetSendForm from '../components/Auth/ResetSendForm'

const Reset = () => {

  const { token } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      return await UserService.fetchUserByResetToken(token)
    }
    fetchUser().then(resp => {
      setUser(resp.data)
    })
  }, [token])

  return (
    <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
      <span className="text-[36px] text-center leading-[56px] text-[#000000]">Восстановление пароля</span>
      {user ? <ResetSendForm user_id={user.user_id} /> : <div>Загрузка</div>}
    </div>
  )
}

export default Reset