import { Outlet, useNavigate } from 'react-router-dom'
import { useContext, useRef } from 'react' 
import LogoutIcon from './Icons/LogoutIcon'
import { Context } from '../index'
import { useSideBar } from '../Hooks/UseSideBar'
import SideBarItem from './SideBars/SideBarItem'
import { observer } from 'mobx-react-lite'

const SideBar = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const iconRef = useRef(null)
  const bodyRef = useRef(null)
  console.log(bodyRef)
  const { toggle, isToggled, menuItems } = useSideBar(iconRef, bodyRef, user.user.role)

  const logoutHandler = (): void => {
    user.logout()
    navigate('/')
  }

  return (
    <>
      <div
        className={ 'h-screen absolute flex flex-col bg-[#FFFEFE] gap-[20px] w-[50px] transition-all duration-500 items-center ' }
        ref={bodyRef}
      >
        <div className={'flex flex-col gap-[40px] justify-center w-[90%]' + (isToggled ? ' items-start' : ' items-center')}>
          <div>
            <svg
              className="transition-all duration-500 "
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              onClick={toggle}
              ref={iconRef}
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
          {menuItems && menuItems.map((item, index) => {
            return <SideBarItem key={index} icon={item.icon} isToggled={isToggled} title={item.title} path={item.path} />
          })}
        </div>
        <div
          className="bottom-[25px] absolute cursor-pointer"
          onClick={logoutHandler}
        >
          <LogoutIcon />
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default observer(SideBar)