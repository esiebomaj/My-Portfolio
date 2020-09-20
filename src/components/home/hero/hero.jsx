import React, { Component } from "react";
import myImage from "../../../images/bg.jpg";
import "../hero/hero.css";
import Emoji from "../../common/Emoji";

class Hero extends Component {
  state = { blinkText: "" };
  introTextRef = React.createRef();
  blinkRef = React.createRef();

  componentDidMount() {
    window.onLoad = setTimeout(this.handleIntroLoad, 1000);
    this.handleBlink();
  }

  handleIntroLoad = () => {
    this.introTextRef.current.className =
      this.introTextRef.current.className + " move";
  };

  handleBlink = () => {
    setInterval(() => {
      if (this.state.blinkText === "<Scalable />") {
        const blinkText = "<Secure />";
        this.setState({ blinkText });
      } else if (this.state.blinkText === "<Secure />") {
        const blinkText = "<Eye catching />";
        this.setState({ blinkText });
      } else {
        const blinkText = "<Scalable />";
        this.setState({ blinkText });
      }
    }, 2000);
  };

  render() {
    const { darkMode } = this.props;
    return (
      <section className={darkMode ? "hero dark" : "hero"}>
        <div className="left">
          <div className="img-container">
            <img
              className={darkMode ? "dark" : ""}
              src={myImage}
              alt="Esieboma Jeremiah"
            />
          </div>

          <div className="social">
            <div className="icon-container">
              <a className="icon" href="https://facebook.com/esiebomaj">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="icon-container">
              <a className="icon" href="https://twitter.com/EsiebomaJ">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div className="icon-container">
              <a className="icon" href="https://github.com/esiebomaj">
                <i class="fab fa-github"></i>
              </a>
            </div>
            <div className="icon-container">
              <a className="icon" href="https://www.instagram.com/jesieboma/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div ref={this.introTextRef} className="intro-text">
            <h1>
              <Emoji symbol="👋" /> Hello there... I am Jeremiah Esieboma.
            </h1>
            <hr />
            <p>I am commited to life long learning</p>
            <p>
              I build apps that are <br />{" "}
              <span className="blink" ref={this.blinkRef}>
                {this.state.blinkText}
              </span>
            </p>
          </div>
          <div className={darkMode ? "resume-btn dark" : "resume-btn"}>
            <div className="slide"></div>
            <a href="https://drive.google.com/file/d/16ywKl7lwlF_Iv757Gw8vctXXKTaSCNaR/view?usp=sharing">
              View Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
