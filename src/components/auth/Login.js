/**@jsx jsx*/
import {Fragment} from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

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
const labelStyle = css`
  margin-top: 15px;
`
const buttonStyle = css`
  width: 100%;
  margin-top: 20px;
`
const registerLink = css`
  display: block;
  text-align: center;
  margin-top: 25px;
`


const Login = () => {
  return (
    <Fragment>
      <Container css={ containerStyle }>
        <div css={ boxLogin }>
          <h2>Inicia Sesion</h2>
          <Form>
            <Form.Group>
              <Form.Label css={labelStyle}>Email: </Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Email:"
                name="email"
                autoFocus>
              </Form.Control>

              <Form.Label css={labelStyle}>Password: </Form.Label>
              <Form.Control 
                type="password" 
                placeholder="password:"
                name="password">
              </Form.Control>

              <Button
                size="lg"
                css={ buttonStyle }
                variant="primary" 
                type="submit">
                Iniciar Sesion
              </Button>

              <Link
                css={ registerLink } 
                to={'/register'}>
                ¿No tienes una cuenta?
              </Link>
            </Form.Group>
            <Alert variant="danger">Error, credenciales incorrectas</Alert>
          </Form>
        </div>
      </Container>
    </Fragment>
  )
}

export default Login
