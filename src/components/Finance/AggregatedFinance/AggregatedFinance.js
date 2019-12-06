import React from 'react'

import FinanceTable from '../FinanceTable'
import FinanceToAggregatedAdapter from './FinanceToAggregatedAdapter'

const columns = [
  {
    dataField: 'finUnitName',
    text: 'Financial Unit Name',
  },
  {
    dataField: 'currency',
    text: 'Currency',
  },
  {
    dataField: 'calcValue',
    text: 'Calculated Value (in USD)',
  },
]

const AggregatedFinance = () => (
  <FinanceTable FinanceAdapter={FinanceToAggregatedAdapter} columns={columns} />
)

export default AggregatedFinance
