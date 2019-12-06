import { useState, useEffect } from 'react'
import axios from '../../shared/axios-instance'

const useFinanceApi = initialData => {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const result = await axios('/finance')
      setData(result.data)
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data, isLoading, isError, fetchData]
}

export default useFinanceApi
