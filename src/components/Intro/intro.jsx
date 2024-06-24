import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  const handleClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    alert("Ready to elevate your project? Let's connect! Drop me a message.");
  };
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Nithin Kumar</span>
            <br />
            Web Developer
          </span>
          <p className="introPara">
            I code interactive websites, bringing digital visions to life.{" "}
            <br /> I build beautiful web apps, from design to function.
          </p>
          <Link>
            <button className="btn" onClick={handleClick}>
              <img src={btnImg} alt="Hire Me" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
