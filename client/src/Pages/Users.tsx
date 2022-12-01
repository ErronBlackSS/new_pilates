import { useUsers } from '../Hooks/UseUsers'
import { useLocation } from 'react-router-dom'

const Users = () => {
  const location = useLocation()
  const title = location.pathname === '/account/users' ? 'Список пользователей' : 'Тренеры'

  const { users } = useUsers()

  return (
    <div className="pt-[50px] pr-[60px]">
      <div className="flex flex-row justify-between">
        <div className="flex gap-[40px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
            {title}
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Users