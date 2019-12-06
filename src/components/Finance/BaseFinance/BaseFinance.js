import React from 'react'

import FinanceTable from '../FinanceTable'
import FinanceToBaseAdapter from './FinanceToBaseAdapter'

const columns = [
  {
    dataField: 'finUnitName',
    text: 'Financial Unit Name',
  },
  {
    dataField: 'notionalValue',
    text: 'Notional Value',
  },
  {
    dataField: 'rate',
    text: 'Rate',
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

const BaseFinance = () => (
  <FinanceTable FinanceAdapter={FinanceToBaseAdapter} columns={columns} />
)

export default BaseFinance
