import AppContext from './AppContext'
import { useContext } from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown, Container } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import nts from './../assets/nts.png'
import './NavBar.css'

function NavBar({ handleShowNewReservation }) {

  const { onSignOut } = useContext(AppContext)

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to='/reservations'>
            <Navbar.Brand>
              <img
                src={nts}
                width='84px'
                height='60px'
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar pax</Button>
          </Form>
          <Button variant="outline-primary" onClick={handleShowNewReservation}>Nueva Reserva <i className="fas fa-plus-circle"></i></Button>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick ={onSignOut}>Cerrar Sesion</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <Outlet />


    </>
  )
}
export default NavBar

  // < Navbar className = "justify-content-center" bg = 'myBlue' variant = 'dark' sticky = 'top' expand = 'lg' >
  //       <Navbar.Brand className='Nav'>
  //         <img onClick={() => goToHome()} src={nts} width='84px' height='60px' alt='logo' />
  //       </Navbar.Brand>
  //       <Nav className='w-100 d-flex justify-content-around'>
  //         <Form className="d-flex" onSubmit={(event) => {
  //           event.preventDefault()
  //           const query = event.target.query.value

  //           onSearch(query)
  //         }}>
  //           <FormControl type="search" placeholder="buscar pax" className="me-2" aria-label="Search" name='query' style={{ width: '250px' }} />
  //           <Button variant="outline-primary" type='submit'><i class="fas fa-search"></i> </Button>
  //         </Form>
  //         <Button variant="outline-primary" onClick={goToReservation}>Nueva Reserva <i class="fas fa-plus-circle"></i></Button>
  //         <Nav.Item>
  //         </Nav.Item>
  //         <Nav.Item>
  //         </Nav.Item>
  //         <Nav.Item className='d-flex'>
  //           <Dropdown>
  //             <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
  //               {username}
  //             </Dropdown.Toggle>
  //             <Dropdown.Menu>
  //               <Dropdown.Item onClick={goToProfile}>Perfil</Dropdown.Item>
  //               <Dropdown.Item onClick={onSignOut}>Cerrar sesion</Dropdown.Item>
  //             </Dropdown.Menu>
  //           </Dropdown>

  //         </Nav.Item>
  //       </Nav>
  //     </Navbar >