import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import { AUTH_ROUTES, PUBLIC_ROUTES, SIGN_IN_ROUTES, USER_ACCOUNT_ROUTES } from '../../routes'
import AccountNavBar from '../Layouts/NavBars/AccountLayout'
import AuthLayout from '../Layouts/NavBars/AuthLayout'
import MainNavBar from '../Layouts/NavBars/MainLayout'
import UserSideBar from '../SideBars/UserSideBar'

const UserRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<AccountNavBar />}>
          <Route element={<UserSideBar />}>  
            {AUTH_ROUTES.map(({ PATH, COMPONENT }) =>
              <Route key={PATH} path={PATH} element={<COMPONENT />} />
            )}
            {USER_ACCOUNT_ROUTES.map(({ PATH, COMPONENT }) =>
              <Route key={PATH} path={PATH} element={<COMPONENT />} />
            )}
          </Route>
        </Route>
        <Route element={<MainNavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default UserRouter