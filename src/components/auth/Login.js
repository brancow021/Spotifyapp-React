/**@jsx jsx*/

import { Fragment, useCallback, useContext, useState } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import { LoginFirebase } from './firebase/LoginFirebase'; 
import { AuthContext } from '../../context/authContext'
import { TokenAccess } from '../spotify/getTokenAccess'


const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: auto;
`

const boxLogin = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 40%;
  color: white;
  margin-top: 40px;
  background-color: rgba(20,19,19 ,0.46);

  @media (max-width: 576px){
    width: 100%;
  }
`

const registerLink = css`
  display: block;
  text-align: center;
  margin-top: 15px;
`


const Login = ({ history }) => {

  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(false);

  const onSubmit =  useCallback(
    (formValues) => {
      LoginFirebase(formValues)
      .then((res) => {

        if(res.user){
          dispatch({
            type: 'login',
            payload: formValues
          })

          TokenAccess()
          .then((res) => {
            localStorage.setItem('token', res.access_token)

            history.push('/dashboard');
          })
          
        }else{
          setError(true)
        }
      })
    },[])

  return (
    <Fragment>
      <Container css={ containerStyle }>
        <div css={ boxLogin }>
          <h2>Inicia Sesion</h2>
            <LoginForm onSubmit={ onSubmit }/>
            <Link
              css={ registerLink } 
              to={'/register'}>
              ¿No tienes una cuenta?
            </Link>

            { error 
              ?
                <Alert
                  className="mt-4" 
                  variant="danger">
                  Error, credenciales incorrectas
                </Alert>
              : ''
            }
        </div>
      </Container>
    </Fragment>
  )
}

export default Login
