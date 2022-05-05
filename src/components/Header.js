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
      {/* <Nav.Link> <Link to="/">Home</Link></Nav.Link> */}
      {/* <Nav.Link><Link to="/mongodb/create">MongoDB</Link></Nav.Link> */}
      {/* <Nav.Link><Link to="/docker">Docker</Link></Nav.Link> */}
      <Nav.Link href="/mongodb/create">MongoDB</Nav.Link>
      <Nav.Link href="/mysql/ddl">MySQL</Nav.Link>
      <Nav.Link href="/certificados">Certificados</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
    </div>
  )
}

export default Header