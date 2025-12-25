import React from 'react';
import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <BSNavbar expand="lg" variant="dark" fixed="top" className="bg-primary">
      <Container>
        <BSNavbar.Brand href="#">Raj's Portfolio</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
