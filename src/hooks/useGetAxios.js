import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

let APIKEY = 'BQCsDnpGDw8I7zse6LlGxzmbQmrl1ZCIOFIiC6jnFhXLfTiHvTpXFCqVRQmpz6VW0KcEvpqQlwEXu5xU8aUbcHLT6eOm2j6-CkL_zVRi08YKUwNNRTfs8G75zrXP0kFRYYLyDsjqpFb1wdZMNKpk5QdHrSxYPTvT_K8'

export const useGetAxios = (url) => {
  const [values, setvalues] = useState({
    loading: true,
    data: [],
    err: false
  })

  useEffect(() => {
    Axios.get(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${APIKEY}`
      }
    })
    .then((res) => { 
      setvalues({
        loading: false,
        data: res.data, 
        err: false
      })
    })
    .catch(err => {
      setvalues({
        loading: true,
        err: true
      })
    })
    
  }, [url])

  return values
}



