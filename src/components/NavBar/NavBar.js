import React from 'react'
import { navigate } from '@reach/router'
import { Nav, Navbar } from 'react-bootstrap'

import TopLogo from '../../assets/images/toplogo.svg'

const navigateTo = path => event => {
  event.preventDefault()

  navigate(path)
}

const NavBar = ({ routes }) => {
  const [homeRoute, ...otherRoutes] = routes
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href={homeRoute.path} onClick={navigateTo(homeRoute.path)}>
        <img
          alt=""
          src={TopLogo}
          width="180"
          height="35"
          className="d-inline-block align-top"
        />
        {` ${homeRoute.title}`}
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {otherRoutes.map(route => {
            const { title, path } = route
            return (
              <Nav.Link key={title} href={path} onClick={navigateTo(path)}>
                {title}
              </Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
