import React from 'react'
import { Router } from '@reach/router'

import routes from './routes'
import NavBar from './NavBar/NavBar'
import ContentLayout from './Layout/ContentLayout'
import NotFound from './NotFound/NotFound'

const App = () => {
  return (
    <div>
      <NavBar routes={routes} />
      <ContentLayout>
        <Router>
          {routes.map(route => {
            const { Component, path } = route
            return <Component path={path} />
          })}
          <NotFound default />
        </Router>
      </ContentLayout>
    </div>
  )
}

export default App
