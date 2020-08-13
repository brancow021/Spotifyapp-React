/** @jsx jsx */

import { Fragment, useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import { css, jsx } from '@emotion/core'
import { AuthContext } from '../context/authContext'

const LinkNav = css`
  color: #eee;
  font-weight: bold;
  text-Decoration: none;
  padding-left: 25px;
  cursor: pointer;
  height: 100%;

  @media (max-width: 992px){
    margin-top: 10px
  }
  
  :hover{
    text-decoration: none;
    color: white;
    opacity: 0.8;    
  }
`

export const NavbarUI = () => {
  const { user } = useContext(AuthContext)

  console.log(user.logged);

  return(
    <Fragment>
      <Navbar 
        bg="primary"
        expand="lg"
        collapseOnSelect
        variant="dark">

        <Link to={'/'}>
          <Navbar.Brand>
            IMusic
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

            <NavLink
              to="/"
              exact
              css={LinkNav}
              activeClassName="active">
              Nuevos lanzamientos
            </NavLink>

            <NavLink 
              to="/search-artists" 
              exact
              css={LinkNav}
              activeClassName="active">
              Buscar Artistas
            </NavLink> 
          </Nav>
          
          { !user.logged
          ?
            <Nav>
              <NavLink
                  to="/login"
                  exact
                  css={LinkNav}
                  activeClassName="active">
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  exact
                  css={LinkNav}
                  activeClassName="active">
                  Registro
                </NavLink>
            </Nav>
            
          : ''
          }
          </Navbar.Collapse>
      </Navbar>
    </Fragment>
  )
}
