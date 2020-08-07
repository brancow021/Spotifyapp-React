import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

let APIKEY = 'BQCS7gRntzYs8fFFQquf_DvPqang6QtTOO_oFo9sCDkjHPrKnC3DCVFdASjiD3aK2zC7BVqP637dm74as4gdQoss5gTovyPB0H90vtImnw1Wz3_3hO22EEQyVQ6MOLiLIyTZX7UdUmmUxQmUrBqwxXLn6lRZJ3xJ6dU'

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



