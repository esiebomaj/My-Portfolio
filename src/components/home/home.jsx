import React, { Component } from "react";
import myImage from "../../images/bg.jpg";
import "../home/home.css";

class Home extends Component {
  state = { scrollTop: 0 };
  introTextRef = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.onLoad = setTimeout(this.handleIntroLoad, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    this.setState({ scrollTop });
  };

  handleIntroLoad = () => {
    this.introTextRef.current.className =
      this.introTextRef.current.className + " move";
  };

  render() {
    return (
      <div
        style={this.state.scrollTop > 170 ? { marginTop: "90px" } : {}}
        className="page"
      >
        <section className="hero">
          <div className="left">
            <div className="img-container">
              <img src={myImage} alt="Esieboma Jeremiah" />
            </div>
            <div className="social">
              <div className="icon-container">
                <a className="icon" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon" href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon" href="#">
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <div className="icon-container">
                <a className="icon" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div ref={this.introTextRef} className="intro-text">
              <h1>Hello there...</h1>
              <h2>Am Jeremiah Esieboma.</h2>
              <h2>welcome to my world ...</h2>
            </div>
            <div className="btn-grp">
              <a href="#">View Resume</a>
            </div>
          </div>
        </section>
        <section className="skill-section"></section>
      </div>
    );
  }
}

export default Home;
