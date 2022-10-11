import { observer } from 'mobx-react-lite'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../routes'
import { PublicRoutes } from '../routes'

const AppRouter = () => {
  return (
    <React.Suspense>
      <Routes>
        {AuthRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )}
        {PublicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} element={<Component />} />
        )}
      </Routes>
    </React.Suspense>
  )
}

export default observer(AppRouter)