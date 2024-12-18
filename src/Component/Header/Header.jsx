import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu.json'



function Header() {
  return (
    <header className='sticky-sm-top'>
      <Navbar expand="lg"
        className="bg-body-tertiary">
        <Container>
          <Link to="/" className='navbar-brand'>
            <img src={'../../image/logo.png'}
              alt="logo" />
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {

                Menu.map((data, index) => {
                  if (data.isDropdown == true) {
                    return (
                      <NavDropdown
                        title={data.label} className={data.textColor} >
                        {
                          data.dropdownmenu.map((item, index) => {
                            return <Link to={item.link} className={`dropdown-item fw-semibold ${item.textColor}`}
                              key={index}>{item.label}</Link>
                          })
                        }
                      </NavDropdown>
                    )
                  }
                  return (
                    <Link to={data.link}
                      className={`nav-link ${data.textColor}`}
                      key={index}>{data.label}</Link>
                  )
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >

      </header>
  )
}

 export default Header