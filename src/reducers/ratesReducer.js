import * as actions from '../actions/actionTypes'

const ratesReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.UPDATE_RATES:
      return action.rates
    default:
      return state
  }
}

export default ratesReducer
