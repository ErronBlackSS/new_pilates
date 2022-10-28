import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useContext, useRef } from 'react' 
import LogoutIcon from '../Icons/LogoutIcon'
import { Context } from '../../index'
import { useSideBar } from '../../Hooks/useSideBar'

const UserSideBar = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()
  
  const iconRef = useRef(null)
  const sideBarRef = useRef(null)

  const { toggle } = useSideBar(iconRef, sideBarRef)

  const logoutHandler = (): void => {
    user.logout()
    navigate('/')
  }

  return (
    <>
      <div
        className="h-[calc(100%-62px)] fixed flex flex-col bg-[#777] border gap-[20px] items-center w-[50px] transition-all duration-500"
        ref={sideBarRef}
      >
        <div>
          <svg
            ref={iconRef}
            className="transition-all duration-500"
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