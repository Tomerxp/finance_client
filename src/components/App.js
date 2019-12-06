import React from 'react'
import { Router } from '@reach/router'

import HomePage from './HomePage/HomePage'
import NavBar from './NavBar/NavBar'
import FXCalculator from './FXCalculatorPage/FXCalculator'
import NotFound from './NotFound/NotFound'
import ContentLayout from './Layout/ContentLayout'
import BaseFinance from './Finance/BaseFinance'

const App = () => {
  return (
    <div>
      <NavBar />

      <ContentLayout>
        <Router>
          <HomePage path="/" />
          <FXCalculator path="/calculator" />
          <BaseFinance path="/finance" />
          <NotFound default />
        </Router>
      </ContentLayout>
    </div>
  )
}

export default App
