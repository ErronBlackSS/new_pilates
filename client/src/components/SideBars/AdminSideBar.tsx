import { Outlet } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <>
      <div className="h-full flex flex-col absolute bg-bordo">
      Боковое меню администратора
      </div>
      <Outlet />
    </>
  )
}

export default AdminSideBar