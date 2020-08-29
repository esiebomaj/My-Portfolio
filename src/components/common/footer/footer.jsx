import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import "../footer/footer.css";

const codeIcon = <FontAwesomeIcon color="blue" icon={faCode} />;
const heartIcon = <FontAwesomeIcon color="red" icon={faHeart} />;

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Made with {heartIcon} and {codeIcon} by{" "}
        <a href="https://github.com/esiebomaj">Jeremiah</a>
      </p>
    </div>
  );
};

export default Footer;
