import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <Navbar
      collapseOnSelect
      position="fixed"
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar "
    >
      <Container>
        <h3 className="name">Daniel Sosa</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="dropDown">
          <Nav className="links">
            <NavLink to="about" className="pages">
              About Me
            </NavLink>
            <NavLink to="/projects" className="pages">
              Projects
            </NavLink>
            <NavLink to="/contact" className="pages">
              Contact
            </NavLink>
            <NavLink to="/resume" className="pages">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
