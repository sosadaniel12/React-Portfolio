import React from "react";
import Navbar1 from "../components/Navbar";

const AboutMe = () => {
  return (
    <section>
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Me</h1>
            <p>
              Hello! My name is Daniel Sosa. I am a full stack web developer,
              who is passionate about creating web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
