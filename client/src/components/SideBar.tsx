import { Outlet, useNavigate } from 'react-router-dom'
import { useContext, useRef, useState } from 'react' 
import IconLogout from './Common/Icons/IconLogout'
import { Context } from '../index'
import { useSideBar } from '../Hooks/UseSideBar'
import SideBarItem from './SideBars/SideBarItem'
import { observer } from 'mobx-react-lite'
import IconArrow from './Common/Icons/IconArrow'
import IconLogo from './Common/Icons/IconLogo'
import Icon from './Icon'
import IconArrowBack from './Common/Icons/IconArrowBack'

const SideBar = () => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const bodyRef = useRef(null)
  console.log(bodyRef)
  const { toggle, isToggled, menuItems } = useSideBar(bodyRef, user.user.role)

  const [selected, setSelected] = useState('')

  const logoutHandler = (): void => {
    user.logout()
    navigate('/')
  }

  const toMainPage = (): void => {
    navigate('/')
  }

  return (
    <>
      <div
        className={ 'h-screen fixed flex flex-col bg-[#FFFEFE] gap-[20px] w-[50px] transition-all duration-500 items-center' }
        ref={bodyRef}
      >
        <div className={'flex flex-col gap-[40px] justify-center ' + (isToggled ? ' items-start' : ' items-center')}>
          {menuItems && menuItems.map((item, index) => {
            return <SideBarItem setSelected={setSelected} selected={selected} key={index} icon={item.icon} isToggled={isToggled} title={item.title} path={item.path} />
          })}
        </div>
        <div
          className="bottom-[25px] absolute flex flex-col gap-[40px] items-center"
        >
          <Icon
            onClick={toMainPage}
          >
            <div className="flex flex-row justify-center items-center gap-[10px] cursor-pointer">
              <IconLogo />
              {isToggled && <span>На главную</span>}
            </div>
          </Icon>
          <Icon
            onClick={logoutHandler}
          >
            <div className="flex flex-row justify-center items-center gap-[10px] cursor-pointer">
              <IconLogout />
              {isToggled && <span>Выйти из аккаунта</span>}
            </div>
          </Icon>
          <Icon
            onClick={toggle}
          >
            <div className="flex flex-row justify-center items-center gap-[10px] cursor-pointer">
              {isToggled ? <IconArrowBack /> : <IconArrow />}
              {isToggled && <span>Свернуть</span>}
            </div>
          </Icon>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default observer(SideBar)