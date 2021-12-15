import React from "react";
import Navbar1 from "../components/Navbar";

const AboutMe = () => {
  return (
    <div>
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, doloremque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
