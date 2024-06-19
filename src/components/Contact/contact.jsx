import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqrdz0i",
        "template_e8n9p44",
        form.current,
        "9ge9Iq_u0s-wCsSuV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent..!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with include:
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://github.com/Nithin7406"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="Github" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/nithinkumara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" className="link" />
            </a>
            <a
              href="https://x.com/Nithin740615258"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" className="link" />
            </a>
            <a
              href="https://www.instagram.com/n_i_t_h_i_n_7316"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
