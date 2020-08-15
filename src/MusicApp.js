import React, { useReducer } from 'react'
import Routes from './routes/Routes'
import { AuthContext } from './context/authContext'
import { authReducer } from './context/authReducer'


export const MusicApp = () => {
  
  const [user, dispatch] = useReducer(authReducer, {logged: false, tokenAccess: ''})
  
  console.log(user);

  return(
    <AuthContext.Provider value={{ user, dispatch }}>
      <Routes/>
    </AuthContext.Provider>

  )
}
