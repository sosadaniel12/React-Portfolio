import React from "react";
import Navbar1 from "../components/Navbar";
import "./about-me.css";
import { People } from "react-bootstrap-icons";

const AboutMe = () => {
  return (
    <section className="outer">
      <Navbar1 />

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="header">About Me</h1>
            <People className="people" />
            <p className="info">
              Hello! My name is Daniel Sosa. I am a full stack web developer,
              who is passionate about creating web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="loop-wrapper">
        <div className="mountain"></div>
        <div className="hill"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="rock"></div>
        <div className="truck"></div>
        <div className="wheels"></div>
      </div>
    </section>
  );
};

export default AboutMe;
