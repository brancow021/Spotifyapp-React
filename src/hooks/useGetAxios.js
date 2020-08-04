import { useState} from 'react'
import Axios from 'axios'
import { useEffect } from 'react'

let APIKEY = 'BQCmkbto6Vb2jfJ3ayBG0rvst37bZ9xPUKIfNE3dF7F2hw1gZMRJGYKXHz6f-A79f1D11aSg7rfXayA8m_ad72SQjw9JV-VtkM4Fnat61W4K_6jrkOSXHJ0dZUtCUkkHGOnuzqM265FT-LJR66TxLEFUC-8xDSV2RZw'

export const useGetAxios = (url) => {
  const [values, setvalues] = useState({
    loading: true,
    data: [],
    err: null
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
      console.log(res.data)
      setvalues({
        loading: false,
        data: res.data ,
        err: null
      })
    })
    .catch(err => {
      setvalues({
        loading: true,
        err
      })
    })
    
  }, [url])

  return values
}



