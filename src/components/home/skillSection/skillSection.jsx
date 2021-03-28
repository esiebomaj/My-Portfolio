import React, { Component } from "react";
import djangoLogo from "../../../images/django.png";
import reduxLogo from "../../../images/redux.png";
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
          <img height="75px" src={reduxLogo} alt="" />
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
                <li><b>React and Redux</b></li>
                <li><b>Javascript</b></li>
                <li><b>html 5</b></li>
                <li><b>css 3</b></li>
                <li><b>Bootstrap</b></li>
              </ul>
            </div>
            <div className={darkMode?"my-col shadow col my-col-dark":"my-col shadow col"}>
              <h4>Back-end</h4>
              <ul>
                <li><b>Python</b></li>
                <li><b>Django</b></li>
                <li><b>REST API</b></li>
                <li><b>PostgreDB</b></li>
                <li><b>Digital Ocean and AWS</b></li>
              </ul>
            </div>
            <div className={darkMode?"my-col shadow col my-col-dark":"my-col shadow col"}>
              <h4>lots more ..</h4>
              <ul>
              
                <li><b>Github/Git</b></li>
                <li><b>Machine Learning with Tensorflow and SKLearn</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SkillSection;
