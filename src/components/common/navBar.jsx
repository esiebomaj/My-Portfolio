import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Jeremiah1.png";
import "../common/navBar.css";

class NavBar extends Component {
  state = { scrollTop: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    this.setState({ scrollTop });
  };

  generateNavClasses = () => {
    let classes = "navbar navbar-expand-lg animated ";
    if (this.state.scrollTop > 170) {
      classes = classes + " fixed-top fadeInDown  shadow";
    }
    return this.props.darkMode === true
      ? classes + " navbar-dark bg-dark"
      : classes + " navbar-light bg-primary ";
  };

  render() {
    const { onDarkModeToggle, darkMode } = this.props;
    return (
      <nav
        className={this.generateNavClasses()}
        // onScroll={this.handleScroll}
        // class={
        //   darkMode === true
        //     ? "navbar navbar-expand-lg navbar-dark bg-dark"
        //     : "navbar navbar-expand-lg navbar-light bg-primary"
        // }
      >
        <Link class="navbar-brand" to="/">
          <img src={logo} alt="Jeremiah" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/blog/">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="">
                Skills
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="">
                Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="">
                Experience
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="">
                Contact
              </Link>
            </li>
          </ul>

          {/* dark mode switch */}
          <label class="switch">
            <input type="checkbox" onChange={onDarkModeToggle} />
            <span class="slider"></span>
          </label>
        </div>
      </nav>
    );
  }
}

export default NavBar;
