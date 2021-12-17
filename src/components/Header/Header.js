import React, { Component } from "react";
import { Route, Navigate, HashRouter, Routes } from "react-router-dom";
import AboutMe from "../../screens/AboutMe/about-me";
import Navbar1 from "../../components/Navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navbar1 />
        </header>

        <Routes>
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="about" element={<AboutMe />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default Header;
