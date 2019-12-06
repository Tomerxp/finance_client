import HomePage from './HomePage/HomePage'
import FXCalculator from './FXCalculatorPage/FXCalculator'
import BaseFinance from './Finance/BaseFinance/BaseFinance'
import AggregatedFinance from './Finance/AggregatedFinance/AggregatedFinance'

const routes = [
  {
    title: 'Foreign Exchange',
    Component: HomePage,
    path: '/',
  },
  {
    title: 'FX Table',
    Component: BaseFinance,
    path: '/finance',
  },
  {
    title: 'FX Table - Aggregated',
    Component: AggregatedFinance,
    path: '/aggregated-finance',
  },
  {
    title: 'Exchange Calculator',
    Component: FXCalculator,
    path: '/calculator',
  },
]

export default routes
