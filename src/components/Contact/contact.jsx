import React, { useRef, useEffect } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    emailjs.init("CZMO9xqICjpxSwf99boxA");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form submission triggered");

    emailjs
      .sendForm(
        "service_vqrdz0i",
        "template_e8n9p44",
        form.current,
        "CZMO9xqICjpxSwf99boxA"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          e.target.reset();
          alert("Email sent..!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email. Please try again later.");
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
            name="from_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="Twitter" className="link" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YoutubeIcon} alt="YouTube" className="link" />
            </a>
            <a
              href="https://www.instagram.com"
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
