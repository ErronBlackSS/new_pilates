import { observer } from 'mobx-react-lite'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </React.Suspense>
  )
}

export default observer(AppRouter)