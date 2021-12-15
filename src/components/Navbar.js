import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
let styles = {
  navbar: {
    color: "white",
    marginLeft: "1px",
    fontSize: "2em",
  },
  pages: {
    color: "white",
  },
};

const Navbar1 = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <h3 style={styles.navbar}>Daniel Sosa</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#" className="pages" style={styles.pages}>
              About Me
            </Nav.Link>
            <Nav.Link href="#" className="pages" style={styles.pages}>
              Projects
            </Nav.Link>
            <Nav.Link href="#" className="pages" style={styles.pages}>
              Contact
            </Nav.Link>
            <Nav.Link href="#" className="pages" style={styles.pages}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
