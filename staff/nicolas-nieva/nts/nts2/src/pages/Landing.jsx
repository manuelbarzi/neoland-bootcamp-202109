import { Button, Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import Register from '../components/Register'
import Login from '../components/Login';
import React, { useState } from 'react'

function Landing({goToHome}) {
  const [modalRegister, setModalRegister] = useState(false);
  const handleCloseRegister = () => setModalRegister(false);
  const handleShowRegister = () => setModalRegister(true);

  const [modalLogin, setModalLogin] = useState(false);
  const handleCloseLogin = () => setModalLogin(false);
  const handleShowLogin = () => setModalLogin(true);

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
            <Nav.Link href="" onClick={handleShowRegister}>Registrar Agencia</Nav.Link>
            <Nav.Link href="" onClick={handleShowLogin}>Iniciar Sesion </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <Register  handleClose={handleCloseRegister} modalRegister={modalRegister} /> 
   <Login handleClose={handleCloseLogin} modalLogin={modalLogin} goToHome={goToHome} />


  </>
}

export default Landing