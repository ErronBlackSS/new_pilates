import { observer } from 'mobx-react-lite'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AUTH_ROUTES, SIGN_IN_ROUTES, PUBLIC_ROUTES } from '../routes'
import AccountNavBar from './Layouts/NavBars/AccountLayout'
import MainNavBar from './Layouts/NavBars/MainLayout'
import AuthLayout from './Layouts/NavBars/AuthLayout'

const AppRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<AccountNavBar />}>
          {AUTH_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
        <Route element={<MainNavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
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
  
export default observer(AppRouter)