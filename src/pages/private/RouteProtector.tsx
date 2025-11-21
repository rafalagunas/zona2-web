import React from 'react';
import { Route} from 'react-router-dom'
import RoutesWithNotFound from '../../utils/routes-with-not-found'
import { PrivateRoutes } from '../../models/routes'
import RootPage from './root-page/RootPage'

const RouteProtector = () => {
  return (
    <RoutesWithNotFound>
      <Route index element={<RootPage />} />
    </RoutesWithNotFound>
  )
}

export default RouteProtector
