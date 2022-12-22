import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import { PUBLIC_ROUTES, SIGN_IN_ROUTES, ADMIN_ROUTES } from '../../routes'
import MainLayout from '../Layouts/NavBars/MainLayout'
import SideBar from '../SideBar'

const UserRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<SideBar />}>  
          {ADMIN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
        <Route element={<MainLayout />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default UserRouter