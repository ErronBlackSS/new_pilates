import { useState } from 'react'

export const useSideBar = (iconRef, bodyRef) => {
    
  const [isToggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!isToggled)
    
    if (!isToggled) {
      iconRef.current.classList.add('transform', 'rotate-180')
      bodyRef.current.classList.add('!w-[200px]', '!items-left')
    } else {
      iconRef.current.classList.remove('transform', 'rotate-180')
      bodyRef.current.classList.remove('!w-[200px]', '!items-left')
    }
  }

  return {
    toggle,
    isToggled
  }
}