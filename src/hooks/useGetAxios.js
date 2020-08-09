import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

let APIKEY = 'BQD3VXDn-XHtht-xDdib7L3H2Ew7tjWMYQcdO_kxq7I9zfaKuYRfFlAOC3sC6v35cXaRDtM4vIszJ7gbYj8MzwT5dow0RRTGk_FPVUVddzZ4szUAOGO2IGKgMBD8b68Qt9t2ZQMgYoHB2nnE9Sv6BQ5WuzbLzWATnbo'

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



