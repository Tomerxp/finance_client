import {
  financeUnitsInput,
  aggregatedAdapterDataOutput,
  routes,
} from '../../../../testUtils/FinanceUtils'
import FinanceToAggregatedAdapter from '../../AggregatedFinance/FinanceToAggregatedAdapter'

describe('FinanceToAggregatedAdapter.test', () => {
  it('should return correct object for a given input', () => {
    const result = FinanceToAggregatedAdapter(financeUnitsInput, routes)

    expect(result).toEqual(aggregatedAdapterDataOutput)
  })

  it('should return empty array for empty input', () => {
    const result = FinanceToAggregatedAdapter({}, routes)

    expect(result).toEqual([])
  })
})
