import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'

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

const FinanceTable = ({ data }) => (
  <BootstrapTable
    keyField="id"
    data={data}
    columns={columns}
    variant="dark"
    size="sm"
    responsive
    striped
    hover
    bordered
  />
)

export default FinanceTable
