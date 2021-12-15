import React from "react";
import { Navbar } from "react-bootstrap";
let styles = {
  navbar: {
    color: "white",
  },
};

const Navbar1 = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <h2 style={styles.navbar}>Daniel Sosa</h2>
      <Navbar.Brand href="#home"></Navbar.Brand>
    </Navbar>
  );
};

export default Navbar1;
