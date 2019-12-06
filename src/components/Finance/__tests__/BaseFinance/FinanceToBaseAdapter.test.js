import {
  financeUnitsInput,
  baseAdapterDataOutput,
  routes,
} from '../../../../testUtils/FinanceUtils'
import FinanceToBaseAdapter from '../../BaseFinance/FinanceToBaseAdapter'

describe('FinanceToAggregatedAdapter.test', () => {
  it('should return correct object for a given input', () => {
    const result = FinanceToBaseAdapter(financeUnitsInput, routes)

    expect(result).toEqual(baseAdapterDataOutput)
  })

  it('should return empty array for empty input', () => {
    const result = FinanceToBaseAdapter({}, routes)

    expect(result).toEqual([])
  })
})
