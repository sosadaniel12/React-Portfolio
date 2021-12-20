import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Resume</h2>
        <hr></hr>
      </div>
      <div className="resumeOuter">
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
            <hr></hr>
            <h4 className="resume-content-title">Technologies</h4>
            <hr></hr>
            <h4 className="resume-content-title">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </h4>
            <hr></hr>
            <div className="resume-left-bottom">
              <h3 className="resume-title">Experience</h3>
              <hr></hr>
              <div className="resume-left-bottom-content">
                <h4 className="resume-content-title">Engagement Specialist</h4>
                <h4 className="resume-content-title">Carenet Health</h4>
                <h4 className="resume-content-title">
                  Septmeber 2021 - Present
                </h4>
                <h4 className="resume-content-title">
                  <ul>
                    <br></br>
                    <li>
                      Quickly and accurately answered customer questions,
                      suggested effective solutions and resolved issues to
                      increase customer satisfaction 85%.
                    </li>
                    <br></br>
                    <li>
                      Resolved 150 issues over phone with 200 customers daily.
                    </li>
                  </ul>
                </h4>
                <br></br>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
        <button className="resume-button">
          <a href="https://drive.google.com/file/d/1ykJo1RezqCGv__dgTMIpUkvQPtZwbAfd/view?usp=sharing">
            Download Resume
          </a>
        </button>
      </div>
      <br></br>
    </section>
  );
};

export default Resume;
