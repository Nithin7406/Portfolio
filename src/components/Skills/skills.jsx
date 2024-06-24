import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What i do</span>
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of web development and a keen eye for detail. I am
        proficient in HTML, CSS, and JavaScript, as well as design software such
        as Adobe Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-end Developer</h2>
            <p>
              Creating Visually Stunning Interfaces using HTML, CSS, and
              JavaScript for engaging user experiences.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back-end Developer</h2>
            <p>
              Building Robust Systems with Python, PHP, Node.js for efficient
              website functionality and data management.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Full-Stack Developer</h2>
            <p>
              Bringing Projects to Life with seamless integration of front-end
              design and back-end logic, delivering end-to-end solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
