import * as actions from './actionTypes'
import axios from '../shared/axios-instance'

const updateRatesAction = rates => ({
  type: actions.UPDATE_RATES,
  rates,
})

export const getFinanceRates = () => dispatch =>
  axios.get('/finance/rates').then(response => {
    dispatch(updateRatesAction(response.data))
  })
