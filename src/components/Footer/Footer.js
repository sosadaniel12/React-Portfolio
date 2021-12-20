import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark">
      <div className="containers">
        <a href="https://github.com/sosadaniel12">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Github account"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/daniel-sosa-a940381b9/">
          <img
            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
            alt="LinkedIn account"
            className="icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
