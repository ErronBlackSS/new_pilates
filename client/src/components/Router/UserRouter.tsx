import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../..'
import Home from '../../Pages/Home'
import { PUBLIC_ROUTES, SIGN_IN_ROUTES, USER_ACCOUNT_ROUTES } from '../../routes'
import MainLayout from '../Layouts/NavBars/MainLayout'
import SideBar from '../SideBar'

const UserRouter = () => {

  const { user } = useContext(Context)

  return (
    <React.Suspense>
      <Routes>
        {user.isAuth && <Route element={<SideBar />}>  
          {USER_ACCOUNT_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>}
        <Route element={<MainLayout />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) => <Route key={PATH} path={PATH} element={<COMPONENT />} />)}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) => <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default observer(UserRouter)
