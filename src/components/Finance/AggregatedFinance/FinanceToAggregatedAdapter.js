const FinanceToAggregatedAdapter = (finUnits = [], rates) => {
  const financeData = []

  Object.keys(finUnits).forEach(finUnitId => {
    const { finUnitName, notionalValues, currencies } = finUnits[finUnitId]

    let calcValue = 0

    notionalValues.forEach((notionalValue, index) => {
      calcValue += rates[currencies[index]] * notionalValue
    })

    calcValue &&
      financeData.push({
        id: finUnitName,
        finUnitName,
        currency: 'USD',
        calcValue,
      })
  })

  return financeData
}

export default FinanceToAggregatedAdapter
