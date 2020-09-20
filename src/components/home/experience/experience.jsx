import React from "react";
import chevronLogo from "../../../images/chevron.png";
import bleatechLogo from "../../../images/bleau.png";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="header-col">
        <h1>
          <span>Experience</span>
        </h1>
      </div>
      <div className="main-col">
        <div className="experience-item">
          <h3>Bleautech Nigeria Limited</h3>
          <img height="35px" src={bleatechLogo} alt="bleautech logo" />
          <p className="info">
            Backend Developer
            <span>&bull;</span> <em className="date">Jan 2020 - present</em>
          </p>
          <p>
            I asisted in development of company website
            <br /> I also asist in building different software applications for
            company
          </p>
        </div>
        <hr />
        <div className="experience-item">
          <h3>Chevron Nigeria Limited</h3>
          <img height="35px" src={chevronLogo} alt="bleautech logo" />
          <p className="info">
            IT intern
            <span>&bull;</span> <em className="date">Jul 2019 - jan 2020</em>
          </p>
          <p>
            I was responsible for maintaining software and hardware used by
            company staff
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
