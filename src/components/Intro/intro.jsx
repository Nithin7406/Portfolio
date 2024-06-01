import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Nithin</span>
            <br />
            Website Designer
          </span>
          <p className="introPara">
            I am a skilled web designer with experience in creating visual
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire Me" />
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
