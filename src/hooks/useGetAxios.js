import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

let APIKEY = 'BQDYiUFR_Tm9Xj8hwvk2FqKYeS7a_YO5V7-owjSHo58rZ11MKqd5Bzgqx79znz6ZqwYb_zius0d5rAVqe-XGP3FJW8b6uwZzjVEFDXcDkGdLH7H696tCcQUkqU7xKGnyVTlAqESm9KWWQaz2kSuBe1mrAKi69RWmqsw'

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



