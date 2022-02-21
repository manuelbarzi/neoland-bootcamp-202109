import { Button, Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import Register from '../components/Register'
import Login from '../components/Login';
import React, { useState } from 'react'

function Landing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [view, setView] = useState('')

  return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">NTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Servicios</Nav.Link>
            <Nav.Link href="">Tarifarios</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" onClick={() => setView('Register')}>Registrar Agencia</Nav.Link>
            <Nav.Link href="" onClick={() => setView('Login')}>Iniciar Sesion </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {view === 'Register' && <Register  handleClose={handleClose} /> }
    {view === 'Login' && <Login  handleClose={handleClose}/> }
  </>
}

export default Landing