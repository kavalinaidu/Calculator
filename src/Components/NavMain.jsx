import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavMain() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#007bff' }} variant="dark">
      <Container>
        <Navbar.Brand href="/" className="text-white">Loan Calculator</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            <NavLink to='/' className="nav-link text-white">HOME</NavLink>
            <NavLink to='/exchange' className="nav-link text-white">EXCHANGE RATES (LIVE)</NavLink>
            <NavLink to='/about' className="nav-link text-white">ABOUT</NavLink>
            <NavLink to='/error' className="nav-link text-white">ERROR PAGE</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;
