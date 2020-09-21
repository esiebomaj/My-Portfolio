import React, { Component } from "react";
import SkillSection from "./skillSection/skillSection";
import Hero from "../home/hero/hero";
import Contact from "./contact/contact";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import "../home/home.css";

class Home extends Component {
  render() {
    const { scrollTop, darkMode } = this.props;
    return (
      <div
        style={scrollTop > 170 ? { marginTop: "90px" } : {}}
        className="page"
      >
        <Hero darkMode={darkMode} />
        <SkillSection />
        <Projects />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default Home;
