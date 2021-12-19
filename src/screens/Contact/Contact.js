import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="container">
      <div className="project">
        <h2 data-testid="h1tag" className="top-title">
          Contact Form
        </h2>
        <hr></hr>
        <form class="justify-content-center" id="contact-form">
          <div class="mt-5">
            <label htmlFor="name">Name:</label>
            <input
              class="form-control"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div class="mt-5">
            <label htmlFor="email">Email Address:</label>
            <input
              class="form-control"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div class="mt-5">
            <label htmlFor="message">Message:</label>
            <textarea
              class="form-control"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="7"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <div class="mt-5 mb-5">
            <button
              data-testid="button"
              class="btn btn-dark "
              type="submit"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        {/* <h4 className="top-title">Find Me</h4>
        <hr></hr>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/daniel-sosa-a8a8b817b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-sosa-a940381b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://github.com/sosadaniel12"></a>
        </div> */}
      </div>
    </section>
  );
}

export default ContactForm;
