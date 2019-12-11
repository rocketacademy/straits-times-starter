import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => (
  <Navbar collapseOnSelect expand="md" sticky="top">
    <Container className="navbar-container">
      <Navbar.Brand>
        <img alt="ST logo" src="favicon.ico" width="30" height="30" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="#singapore" className="navbar-link">
          SINGAPORE
        </Nav.Link>
        <Nav.Link href="#politics">POLITICS</Nav.Link>
        <Nav.Link href="#asia">ASIA</Nav.Link>
        <Nav.Link href="#world">WORLD</Nav.Link>
        <Nav.Link href="#videos">VIDEOS</Nav.Link>
        <Nav.Link href="#lifestyle">LIFESTYLE</Nav.Link>
        <Nav.Link href="#food">FOOD</Nav.Link>
        <NavDropdown title="MORE" id="nav-dropdown">
          <NavDropdown.Item eventKey="1.1">MULTIMEDIA</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.2">FORUM</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.3">OPINION</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.4">BUSINESS</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.5">SPORT</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.6">TECH</NavDropdown.Item>
          <NavDropdown.Item eventKey="1.7">GAMES</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default NavigationBar;
