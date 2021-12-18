import React from "react";

const Contact = () => {
  return (
    <section className="container">
      <div className="outer">
        <div className="project">
          <h2 className="top-title">Contact</h2>
          <hr></hr>
        </div>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-left-top">
              <h3 className="contact-title">Email</h3>
              <hr></hr>
              <div className="contact-left-top-content">
                <h4 className="contact-content-title">
                  <a href="mailto:danielsosa2121@gmail.com" target="_blank"></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
