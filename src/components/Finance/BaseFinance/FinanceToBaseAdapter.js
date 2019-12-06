const FinanceToAggregatedAdapter = (finUnits = [], rates) => {
  const financeData = []
  let rollingIndex = 0

  Object.keys(finUnits).forEach(finUnitId => {
    const { finUnitName, notionalValues, currencies } = finUnits[finUnitId]

    notionalValues.forEach((notionalValue, index) => {
      financeData.push({
        id: ++rollingIndex,
        finUnitName,
        notionalValue,
        rate: rates[currencies[index]],
        currency: currencies[index],
        calcValue: rates[currencies[index]] * notionalValue,
      })
    })
  })

  return financeData
}

export default FinanceToAggregatedAdapter
