import React from "react";
import "./Resume.css";
import { Button } from "react-bootstrap";

const Resume = () => {
  return (
    <section className="container">
      <div className="outer">
        <div className="project">
          <h2 className="top-title">Resume</h2>
          <hr></hr>
        </div>
        <div className="resume-container">
          <div className="resume-left">
            <div className="resume-left-top">
              <h3 className="resume-title">Education</h3>
              <hr></hr>
              <div className="resume-left-top-content">
                <h4 className="resume-content-title">
                  University of San Antonio, San Antonio, TX
                </h4>
                <h4 className="resume-content-title">
                  Certificate of Completion: Full Stack Web Development
                </h4>
                <h4 className="resume-content-title">Graduated January 2022</h4>
                <br></br>
              </div>
            </div>
            <div className="resume-left-bottom">
              <h3 className="resume-title">Experience</h3>
              <hr></hr>
              <div className="resume-left-bottom-content">
                <h4 className="resume-content-title">
                  Software Engineer Intern
                </h4>
                <h4 className="resume-content-title">UCI Data Science Lab</h4>
                <h4 className="resume-content-title">May 2020 - Present</h4>
                <h4 className="resume-content-title">
                  <ul>
                    <li>
                      Developed a web application for the UCI Data Science Lab
                      that allows users to visualize the data collected by the
                      lab.
                    </li>
                    <li>
                      Implemented a REST API for the web application that
                      retrieves data from the database.
                    </li>
                  </ul>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <Button className="button" />
      </div>
    </section>
  );
};

export default Resume;
