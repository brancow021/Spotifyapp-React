/** @jsx jsx */
import React,{useState, Fragment} from 'react'
import { Form, Button } from 'react-bootstrap';
import { css, jsx } from '@emotion/core'
import { Helmet } from 'react-helmet'

const labelStyle = css`
  margin-top: 15px;
`
const buttonStyle = css`
  width: 100%;
  margin-top: 20px;
`


const LoginForm = ({onSubmit}) => {
  const [formValues, setformValues] = useState({email: '', password: ''})

  const handleFormSubmit = evt => {
    evt.preventDefault()
    onSubmit(formValues)
  }

  const handleChange = ({target}) => {
    setformValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return(
    <Fragment>
      <Helmet>
        <title>Inicio de sesion | IMusic</title>
      </Helmet>

      <Form onSubmit={ handleFormSubmit }>
        <Form.Group>
          <Form.Label css={labelStyle}>Email: </Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email:"
            name="email"
            autoFocus
            onChange={ handleChange }>
          </Form.Control>

          <Form.Label css={labelStyle}>Password: </Form.Label>
          <Form.Control 
            type="password" 
            placeholder="password:"
            name="password"
            onChange={ handleChange }>
          </Form.Control>

          <Button
            size="lg"
            css={ buttonStyle }
            variant="primary" 
            type="submit">
            Iniciar Sesion
          </Button>
        </Form.Group>
      </Form>
    </Fragment>
  )
}


export default React.memo(LoginForm)