/** @jsx jsx */
import { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

const footerStyle = css`
  color: #eee;
  background-color: #007bff;
  text-align: center;
  position: absolute; 
  bottom: 0; 
  left: 0; 
  width: 100%;
`

const FooterUI = () => {
  return (
    <Fragment>
      <footer css={ footerStyle }>
        &copy; Desarrollado por: Brandon Rodriguez Torres
      </footer>
    </Fragment>
  )
}

export default FooterUI
