import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function NavMain() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <Navbar expand="lg" variant={darkMode ? 'dark' : 'light'} style={{ backgroundColor: darkMode ? '#343a40' : '#007bff' }}>
      <Container>
        <Link to="/" className="navbar-brand text-white">Loan Calculator</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto d-flex align-items-center gap-4">
            <Nav className="d-flex flex-row gap-3">
              <NavLink to="/" className="nav-link text-white">HOME</NavLink>
              <NavLink to="/exchange" className="nav-link text-white">EXCHANGE RATES</NavLink>
              <NavLink to="/about" className="nav-link text-white">ABOUT</NavLink>
              <NavLink to="/error" className="nav-link text-white">ERROR</NavLink>
            </Nav>
            <Form.Check
              type="switch"
              id="theme-switch"
              label={darkMode ? 'Dark' : 'Light'}
              checked={darkMode}
              onChange={toggleTheme}
              className="text-white"
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;

