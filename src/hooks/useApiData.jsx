import axios from "axios"
import { useEffect, useState } from "react"

export default function useApiData(url) {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({})

  useEffect(() => {
    setIsLoading(true)
    axios.get(url)
    .then((resp) => {
    setData(resp.data)
    })
    .catch(error => {
    console.warn('ivyko klaida:', error);
    setIsError(error.response)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [url])

  return [data, setData, isLoading, isError];
}