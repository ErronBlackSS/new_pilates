const MainSection = ({children, isToggled}) => {
  
  const mainSectionClasses = 'pt-[50px] mobile:above:pr-[60px] transition-all duration-500' + (isToggled ? ' ml-[300px]' : ' ml-[80px]')  

  return (
    <div className={mainSectionClasses}>
      {children}     
    </div>
  )
}

export default MainSection