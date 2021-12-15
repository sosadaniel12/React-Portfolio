import React from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
let styles = {
  navbar: {
    color: "white",
    marginLeft: "1em",
    fontSize: "3em",
  },
};

const Navbar1 = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <h2 style={styles.navbar}>Daniel Sosa</h2>
      <Navbar.Brand href="#home"></Navbar.Brand>
    </Navbar>
  );
};

export default Navbar1;
