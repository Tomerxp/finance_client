import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FXCalculator from './FXCalculator'

jest.mock('react-redux', () => ({
  useSelector: () => ({
    EUR: 2,
  }),
}))

describe('<FXCalculator />', () => {
  it('should have $0 in calculated value on load (empty input)', () => {
    const { queryByText } = render(<FXCalculator />)

    expect(queryByText('$0')).toBeInTheDocument()
  })

  it('should return X*2 in calculated USD when X is input and currency multiplier is 2', () => {
    const { queryByText, getByPlaceholderText } = render(<FXCalculator />)
    const notionalValue = '2000'
    const notionalValueInput = getByPlaceholderText(/notional/i)

    fireEvent.change(notionalValueInput, { target: { value: notionalValue } })

    expect(queryByText(`$${Number(notionalValue) * 2}`)).toBeInTheDocument()
  })
})
