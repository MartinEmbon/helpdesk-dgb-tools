import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tutorials</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link><Link to="/mongodb/create">MongoDB</Link></Nav.Link>
      <Nav.Link href="/mongodb">MySQL (coming soon)</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
    </div>
  )
}

export default Header