import React from 'react'
import { Outlet } from 'react-router-dom'

const CoachSideBar = () => {
  return (
    <>
      <div className="h-full flex flex-col bg-bordo">
      Боковое меню тренера
      </div>
      <Outlet />
    </>
  )
}

export default CoachSideBar