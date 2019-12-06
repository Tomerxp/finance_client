import React from 'react'
import { navigate } from '@reach/router'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import TopLogo from '../../assets/images/toplogo.svg'

const navigateTo = path => event => {
  event.preventDefault()

  navigate(path)
}

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" onClick={navigateTo('/')}>
        <img
          alt=""
          src={TopLogo}
          width="180"
          height="35"
          className="d-inline-block align-top"
        />{' '}
        Foreign Exchange
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Finance Table" id="basic-nav-dropdown">
            <NavDropdown.Item href="/finance" onClick={navigateTo('/finance')}>
              FX Table
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/aggregated-finance"
              onClick={navigateTo('/aggregated-finance')}
            >
              FX Table - Aggregated
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/calculator" onClick={navigateTo('/calculator')}>
            FX Calculator
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
