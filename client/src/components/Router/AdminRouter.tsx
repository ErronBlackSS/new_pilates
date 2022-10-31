import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import { AUTH_ROUTES, PUBLIC_ROUTES, SIGN_IN_ROUTES, ADMIN_ROUTES } from '../../routes'
import NavBar from '../Layouts/NavBar'
import SideBar from '../SideBar'

const UserRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<SideBar />}>  
          {AUTH_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          {ADMIN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
        <Route element={<NavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<NavBar />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default UserRouter