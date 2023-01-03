import { FC } from 'react'

interface IMainSection {
  children: React.ReactNode
  isToggled: boolean
}

const MainSection: FC<IMainSection> = ({children, isToggled}) => {
  
  const mainSectionClasses = 'mobile:above:pr-[60px] transition-all duration-500' + (isToggled ? ' ml-[300px]' : ' ml-[80px]')  

  return (
    <div className={mainSectionClasses}>
      {children}     
    </div>
  )
}

export default MainSection