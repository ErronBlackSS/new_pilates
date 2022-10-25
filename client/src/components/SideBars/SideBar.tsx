import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useContext, useState } from 'react' 
import LogoutIcon from '../Icons/LogoutIcon'
import { Context } from '../../index'

const UserSideBar = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  
  const [isSideBarToggled, setSideBarToggled] = useState(false)

  const toggle = () => {
    setSideBarToggled(!isSideBarToggled)
  }

  const logoutHandler = (): void => {
    user.logout()
    navigate('/')
  }

  return (
    <>
      <div
        className={ 'h-[calc(100%-62px)] absolute flex flex-col bg-[#777] border gap-[20px] transition-all' + (isSideBarToggled ? ' w-[200px] items-left' : ' w-[50px] items-center') }
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            onClick={toggle}
          >
            <path
              fill="none"
              fillRule="evenodd"
              stroke="#000"
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 7h16M11 1l6 6-6 6"
            />
          </svg>
        </div>
        <div>
          <Link to="/account/settings"> 
            Настройки
          </Link> 
        </div>
        <div>
          <Link to="/account/lessons"> 
            Занятия
          </Link> 
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
        <div
          className="bottom-[25px] absolute"
          onClick={logoutHandler}
        >
          <LogoutIcon />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default UserSideBar