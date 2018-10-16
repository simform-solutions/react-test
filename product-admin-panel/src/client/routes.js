import React from 'react'
import asyncComponent from './hoc/asyncRender'
import { Route, Switch } from 'react-router-dom'
import Private from 'hoc/private'

const AppLayout = asyncComponent(() =>
  import('components/AppLayout').then(module => module.default)
)

const Product = asyncComponent(() =>
  import('containers/Product').then(module => module.default)
)

export const Routes = () => {
  return (
    <Switch>
      <Private component={AppLayout} />
    </Switch>
  )
}

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="*" component={Product} />
    </Switch>
  )
}
export default Routes
