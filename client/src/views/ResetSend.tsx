import { useEffect } from 'react'
import UserService from '../services/UserService'
import { useParams } from 'react-router-dom'

const Reset = () => {

  const { token } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      return await UserService.fetchUserByResetToken(token)
    }
    const user = fetchUser()
    console.log(user)
  })

  return (
    <div className="md:mt-[20px] 2xl:mt-[100px] flex justify-center flex-col">
      <span className="text-[36px] text-center leading-[56px] text-[#000000]">Восстановление пароля</span>
    </div>
  )
}

export default Reset