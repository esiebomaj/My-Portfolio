import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import "../footer/footer.css";

const codeIcon = <FontAwesomeIcon color="blue" icon={faCode} />;
const heartIcon = <FontAwesomeIcon color="red" icon={faHeart} />;

const Footer = () => {
  return (
    <div className="footer">
      <div
        title="back to top"
        onClick={() => {
          document.querySelector("body").scrollIntoView({ behavior: "smooth" });
        }}
        className="back-to-top"
      >
        <i class="fas fa-chevron-up"></i>
      </div>
      <div className="social">
        <div className="footer-icon-container icon-container">
          <a className="icon" href="https://facebook.com/esiebomaj">
            <i class="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="footer-icon-container icon-container">
          <a className="icon" href="https://twitter.com/EsiebomaJ">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div className="footer-icon-container icon-container">
          <a className="icon" href="https://github.com/esiebomaj">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="footer-icon-container icon-container">
          <a className="icon" href="https://www.instagram.com/jesieboma/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <p className="footer-text">
        Made with {heartIcon} and {codeIcon} by{" "}
        <a href="https://github.com/esiebomaj">Jeremiah</a>
      </p>
    </div>
  );
};

export default Footer;
