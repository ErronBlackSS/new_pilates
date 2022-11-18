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

  const { toggle, isToggled, menuItems } = useSideBar(bodyRef, user.user.role)

  const [selected, setSelected] = useState('')

  const logoutHandler = (): void => {
    user.logout()
    console.log('logout')
    navigate('/')
  }

  const toMainPage = (): void => {
    navigate('/')
  }

  const toProfile = (): void => {
    navigate('/account/profile')
  }

  return (
    <>
      <div
        className={ 'h-screen fixed flex flex-col bg-[#FFFEFE] gap-[20px] w-[50px] transition-all duration-200 items-center' }
        ref={bodyRef}
      >
        <div className={'flex flex-col gap-[40px] mt-[40px] justify-center ' + (isToggled ? ' items-start' : ' items-center')}>
          <div
            className={'flex flex-row justify-start gap-[10px] items-center cursor-pointer ' + (isToggled ? ' rounded-[50px] bg-[#F2F2F3] w-full' : '')}
            onClick={toProfile}
          >
            <img className="rounded-[50px] w-[40px] h-[40px] border border-bordo object-cover" src={user.user.image_url} alt="" />
            {isToggled && <span className="text-bordo">{user.user.name}</span>}
          </div>
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