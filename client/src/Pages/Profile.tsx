import { observer } from 'mobx-react-lite'

const Profile = () => {



  return (
    <div className="ml-[300px] bg-[#FEFAFA]">
      <div className="flex flex-col pt-[50px]">
        <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
          Личные данные
        </span>
        <div className="flex flex-row">
          <div className="flex flex-col">

          </div>
        </div>
      </div>  
    </div>
  )
}

export default observer(Profile)