import { Outlet, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react' 
import IconLogout from './Common/Icons/IconLogout'
import { Context } from '../index'
import { useSideBar } from '../Hooks/UseSidebar'
import SideBarItem from './SideBars/SideBarItem'
import { observer } from 'mobx-react-lite'
import IconLogo from './Common/Icons/IconLogo'
import Icon from './Icon'
import IconArrowBack from './Common/Icons/IconArrowBack'
import MainSection from './MainSection'

const MobileSideBar = () => {
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
    toggle(false)
    navigate('/')
  }

  const toProfile = (): void => {
    toggle(false)
    navigate('/account/profile')
  }

  useEffect(() => {
    toggle(false)
  }, [selected])

  return (
    <>
      <div className="flex-row w-full justify-between mobile-above:hidden mobile-below:flex">
        <svg
          onClick={toMainPage}
          className="cursor-pointer my-[11px] ml-[22px]"
          width="47"
          height="56"
          viewBox="0 0 47 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.46 29.5644C11.45 29.8341 10.2783 29.9824 9.28176 30.0821C7.98622 30.2169 6.67991 30.3032 5.3911 30.0727C-0.0927219 29.0913 0.0109744 24.0223 2.21285 21.3625C3.2377 20.1249 4.57364 19.2985 5.93113 18.518C7.71822 17.4921 9.55111 16.5443 11.3665 15.567C11.9822 15.2443 12.5701 14.871 13.1239 14.4507C13.5441 14.1245 13.6492 13.7767 13.3933 13.2846C13.0653 12.6731 12.6917 12.0872 12.2755 11.532C10.8924 9.64468 10.9557 8.14288 12.557 6.4092C14.7117 4.08101 17.4253 2.62235 20.3356 1.50071C22.7408 0.573209 25.2349 0.0663201 27.8287 0.15934C28.8215 0.186427 29.7903 0.470688 30.6407 0.984386C32.2864 1.97795 32.6311 3.5849 31.5524 5.17568C30.8561 6.20159 29.8798 6.91475 28.859 7.56184C27.0328 8.71448 25.0585 9.36292 22.8755 9.26586C22.3516 9.24294 21.852 9.13105 21.4278 8.80076C21.1901 8.61003 21.0218 8.34628 20.9488 8.05025C20.8758 7.75421 20.9021 7.44235 21.0238 7.1628C21.2514 6.69096 22.0432 6.36202 22.5887 6.50627C22.9604 6.60333 22.9927 6.85678 22.9496 7.18033C22.8418 8.11053 23.0627 8.42868 23.9987 8.47047C26.5413 8.58371 28.665 7.65082 30.2407 5.65561C31.3639 4.23334 31.0164 2.77334 29.4327 1.87279C28.0536 1.09089 26.5265 0.962815 24.9885 1.08415C21.0332 1.39556 17.5991 2.95803 14.6188 5.5491C14.453 5.69981 14.2956 5.85958 14.1474 6.02769C12.5893 7.73979 12.5018 9.21868 13.8404 11.1141C14.1892 11.6089 14.5582 12.0902 14.8747 12.6051C15.3312 13.3507 15.2908 13.623 14.6579 14.2431C14.0249 14.8632 13.2142 15.3027 12.4183 15.7139C11.3234 16.2801 10.2231 16.8382 9.11477 17.3748C7.29882 18.259 5.60307 19.3716 4.06863 20.6858C2.65054 21.8896 2.18323 23.4939 2.55761 25.3017C2.96836 27.2565 4.32854 28.3404 6.16681 28.7906C8.53029 29.3703 10.8897 28.9753 13.229 28.5048C13.4593 28.4576 13.6088 28.2837 13.7677 28.1193C17.3567 24.3594 21.7362 22.0096 26.7635 20.8152C26.8519 20.7928 26.942 20.7779 27.0328 20.7707C27.1675 20.7599 27.3412 20.7033 27.3789 20.8691C27.4301 21.1037 27.2146 21.0781 27.0705 21.1037C22.4499 21.9449 18.8259 24.5602 15.4591 27.6326C15.4161 27.6717 15.3357 27.7484 15.2881 27.8119C15.0861 28.0815 15.9063 27.7512 16.1406 27.6609C18.7626 26.639 21.1881 25.2626 23.5475 23.7365C26.4578 21.8492 29.5633 20.3447 32.9489 19.5223C33.6344 19.3552 34.1233 19.1179 34.4828 18.5153C34.791 18.026 35.1269 17.5547 35.4888 17.1038C35.703 16.8274 35.8807 16.5646 35.7218 16.1938C35.6181 15.9471 35.742 15.7584 35.9615 15.633C36.3467 15.4119 36.713 15.1504 37.2611 14.9873C36.9029 16.7398 35.4255 17.6902 34.6256 19.1246C35.1912 19.2365 35.7353 19.1246 36.274 19.0815C37.6374 18.9628 39.0105 19.0263 40.3572 19.2702C43.9516 19.9551 45.8787 22.1781 46.1629 25.8315C46.4067 28.9915 45.3966 31.8037 43.6742 34.3246C38.4934 41.9051 31.4689 46.7624 22.3422 48.3828C20.8147 48.6351 19.262 48.699 17.7189 48.5729C17.2745 48.5419 17.0267 48.6686 16.8193 49.0703C16.0692 50.5317 15.2679 51.9607 15.6814 53.7173C15.7958 54.2053 15.0147 55.1732 14.507 55.3054C14.0572 55.424 13.8862 55.1058 13.804 54.7742C13.6921 54.2451 13.7172 53.6961 13.8768 53.1794C14.2552 51.7329 14.9541 50.4292 15.645 49.1189C15.9143 48.6174 15.9507 48.399 15.2491 48.2628C12.4035 47.7114 10.5059 45.971 9.61979 43.2492C8.47508 39.7238 9.01915 36.2942 10.4871 32.9671C10.913 32.005 11.4388 31.0904 12.056 30.2385C12.161 30.0942 12.3927 29.7424 12.46 29.5644ZM44.3906 27.6946C44.3112 24.3391 42.9267 22.2644 39.9801 21.1549C38.0018 20.4107 35.94 20.435 33.8741 20.6022C33.5401 20.6291 33.3731 20.8489 33.2089 21.1023C32.1867 22.6837 31.1457 24.2529 30.1316 25.8382C25.8989 32.444 21.7752 39.1185 18.333 46.1867C17.956 46.9619 17.9613 46.9956 18.8071 47.0279C20.7437 47.1075 22.6506 46.8311 24.5508 46.4887C31.9645 45.177 37.715 41.293 41.9531 35.1268C43.4735 32.9091 44.3664 30.4313 44.3906 27.6946ZM32.6351 20.9918L32.5261 20.8421C31.4487 21.1118 30.3713 21.3814 29.2939 21.651C27.2938 22.163 25.4067 23.0441 23.7293 24.2488C20.811 26.3114 17.7795 28.1705 14.309 29.1802C14.0528 29.2617 13.8328 29.43 13.6869 29.6561C11.5523 32.5586 10.3268 35.7563 10.4628 39.4165C10.5975 42.9216 12.7361 45.6758 16.0423 46.5723C16.5729 46.7152 16.8732 46.6585 17.1466 46.1018C18.0543 44.2504 19.0019 42.4196 19.9895 40.6096C23.3563 34.4662 27.2968 28.6909 31.2804 22.9492L32.6351 20.9918Z"
            fill="black"
          />
        </svg>
        <div 
          className="flex flex-col justify-center items-center gap-[10px] my-[11px] pr-[22px] cursor-pointer"
          onClick={() => toggle(!isToggled)}
        >
          <div className="h-[2px] w-[24px] border border-[#1B1B1B] rounded-[6px]" />
          <div className="h-[2px] w-[24px] border border-[#1B1B1B] rounded-[6px]" />
          <div className="h-[2px] w-[24px] border border-[#1B1B1B] rounded-[6px]" />
        </div>
      </div>
      <div
        className={ 'h-screen h-[calc(100%-78px)] fixed flex flex-col bg-[#FFFEFE] gap-[20px] transition-all duration-500 items-center' + (isToggled ? ' ' : ' hidden') }
        id="sidebar"
        ref={bodyRef}
      >
        <div className={'flex flex-col gap-[40px] mt-[40px] justify-center items-start'}>
          <div
            className={'flex flex-row justify-start gap-[10px] items-center cursor-pointer rounded-[50px] bg-[#F2F2F3] w-full'}
            onClick={toProfile}
          >
            <img className="rounded-[50px] w-[40px] h-[40px] border border-bordo object-cover" src={user.user.image_url} alt="" />
            {isToggled && <span className="text-bordo">{user.user.name}</span>}
          </div>
          {menuItems && menuItems.map((item, index) => {
            return (
              <SideBarItem
                setSelected={setSelected}
                key={index}
                icon={item.icon}
                isToggled={isToggled}
                title={item.title}
                path={item.path}
              />
            )
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
            onClick={() => toggle(false)}
          >
            <div className="flex flex-row justify-center items-center gap-[10px] cursor-pointer">
              <IconArrowBack />
              <span>Свернуть</span>
            </div>
          </Icon>
        </div>
      </div>
      <MainSection
        isToggled={null}
      >
        <Outlet />
      </MainSection>
    </>
  )
}

export default observer(MobileSideBar)