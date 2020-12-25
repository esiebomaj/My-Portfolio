import React, { Component } from "react";
import djangoLogo from "../../../images/django.png";
import "../skillSection/skillSection.css";

class SkillSection extends Component {
  state = {};
  moreRef = React.createRef();
  showMoreRef = React.createRef();
  toggleSkillReveal = () => {
    if (this.moreRef.current.className === "more show-more") {
      this.moreRef.current.className = "more";
      this.showMoreRef.current.innerHTML =
        'Show Details <i class="fas fa-chevron-down"></i> ';
    } else {
      this.moreRef.current.className = "more show-more";
      this.showMoreRef.current.innerHTML =
        'Show less <i class="fas fa-chevron-up"></i>';
    }
  };

  render() {
    const {darkMode}=this.props
    return (
      <section className={darkMode?"skill-section skill-section-dark":"skill-section"}>
        <div className="skill-section-header">
          <h1>My Stack</h1>
        </div>
        <div className="logo-holder">
          <i class="fab fa-python"></i>
          <img height="75px" src={djangoLogo} alt="" />
          <i class="fab fa-js-square"></i>
          <i class="fab fa-react"></i>
        </div>
        <div className="more-container">
          <div
            ref={this.showMoreRef}
            onClick={this.toggleSkillReveal}
            className={darkMode?"prompt prompt-dark":"prompt"}
          >
            <p>
              show details <i class="fas fa-chevron-down"></i>
            </p>
          </div>
          <div ref={this.moreRef} className="more">
            <div className={darkMode?"my-col shadow col my-col-dark":"my-col shadow col"}>
              <h4>Front-end</h4>
              <ul>
                <li>React JS</li>
                <li>Javascript</li>
                <li>html 5</li>
                <li>css 3</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className={darkMode?"my-col shadow col my-col-dark":"my-col shadow col"}>
              <h4>Back-end</h4>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>REST API</li>
                <li>PostgreDB</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className={darkMode?"my-col shadow col my-col-dark":"my-col shadow col"}>
              <h4>lots more ..</h4>
              <ul>
                <li>Github/Git</li>
                <li>Machine Learning with Tensorflow ans SKLearn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillSection;
