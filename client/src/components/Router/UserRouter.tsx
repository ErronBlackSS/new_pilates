import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../..'
import Home from '../../Pages/Home'
import { AUTH_ROUTES, PUBLIC_ROUTES, SIGN_IN_ROUTES, USER_ACCOUNT_ROUTES } from '../../routes'
import NavBar from '../Layouts/NavBar'
import SideBar from '../SideBars/SideBar'

const UserRouter = () => {

  const { user } = useContext(Context)

  return (
    <React.Suspense>
      <Routes>
        {user.isAuth && <Route element={<SideBar />}>  
          {AUTH_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          {USER_ACCOUNT_ROUTES.map(({ PATH, COMPONENT }) =>
            <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>}
        <Route element={<NavBar />}>
          {PUBLIC_ROUTES.map(({ PATH, COMPONENT }) => <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<NavBar />}>
          {SIGN_IN_ROUTES.map(({ PATH, COMPONENT }) => <Route key={PATH} path={PATH} element={<COMPONENT />} />
          )}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default observer(UserRouter)
