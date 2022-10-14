import { observer } from 'mobx-react-lite'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AUTH_ROUTES } from '../routes'
import { PUBLIC_ROUTES } from '../routes'
import AccountNavBar from './Header/NavBars/AccountNavBar'
import MainNavBar from './Header/NavBars/MainNavBar'

const AppRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route element={<AccountNavBar />}>
          {AUTH_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route path={PATH} element={<COMPONENT />} />
          )}
        </Route>
        <Route element={<MainNavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}
  
export default observer(AppRouter)