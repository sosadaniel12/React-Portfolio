import React from "react";
import "./about-me.css";
import { People } from "react-bootstrap-icons";
import "./aboutMediaQueries.css";

const AboutMe = () => {
  return (
    <section className="outer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="top-title">About Me</h2>
            <hr></hr>
            <img className="pic" src={require("../../danielsosapic.jpg")} />
            <p className="info">
              Hello! My name is Daniel Sosa. I am a Full Stack Web Developer,
              who is passionate about creating web applications. I thrive on the
              ability to solve problems, and always strive to learn new
              technologies.
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
