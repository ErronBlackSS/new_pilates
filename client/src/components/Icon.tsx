import React from 'react'

interface IIcon {
  children: any
  onClick?: () => void
}

const Icon = ({children, onClick}) => {
  return (
    <div
      onClick={onClick}
    >
      {children}   
    </div>
  )
}

export default Icon