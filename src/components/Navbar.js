import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
let styles = {
  navbar: {
    color: "white",
    marginLeft: "-15px",
    fontSize: "3em",
  },
  pages: {
    color: "white",
    fontSize: "1.5em",
    display: "flex",
    justifyContent: "end",
  },
};

const Navbar1 = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={styles.navbar}>
          Daniel Sosa
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#AboutMe" style={styles.pages}>
            About Me
          </Nav.Link>
          <Nav.Link href="#Projects" style={styles.pages}>
            Projects
          </Nav.Link>
          <Nav.Link href="#Contact" style={styles.pages}>
            Contact
          </Nav.Link>
          <Nav.Link href="#Resume" style={styles.pages}>
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
