import React from 'react'
import { useSelector } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'

import useInterval from '../../shared/useInterval'
import useFinanceApi from './useFinanceApi'
import { Spinner } from 'react-bootstrap'

import './FinanceTable.scss'

const FinanceTable = ({ columns, FinanceAdapter }) => {
  const [data, isLoading, isError, fetchData] = useFinanceApi([])
  const rates = useSelector(state => state.rates)

  useInterval(() => {
    fetchData()
  }, 10000)

  return (
    <div className={`finance-container${isLoading ? ' loading' : ''}`}>
      {isLoading && (
        <Spinner
          variant="primary"
          animation="border"
          className="loading-spinner"
        />
      )}
      {!isError ? (
        <BootstrapTable
          keyField="id"
          data={FinanceAdapter(data, rates)}
          columns={columns}
          variant="dark"
          size="sm"
          responsive
          striped
          hover
          bordered
        />
      ) : (
        <p className="error-text">Whoops.. something went wrong!</p>
      )}
    </div>
  )
}

export default FinanceTable
