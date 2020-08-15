import { useState, useContext } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export const useGetAxios = (url) => {
  const [token, settoken] = useState(localStorage.getItem('token'))

  const [values, setvalues] = useState({
    loading: true,
    data: [],
    err: false
  })
  
  useEffect(() => {
    console.log(token)
    Axios.get(url, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`
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
    
  }, [url, token])

  return values
}



