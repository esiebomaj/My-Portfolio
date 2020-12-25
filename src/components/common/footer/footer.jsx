import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import "../footer/footer.css";
import { FiPhoneCall, FiMail, FiYoutube, FiTwitter, FiFacebook} from "react-icons/fi";
import {FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";
import foterLogo from '../../../images/Jeremiah1.png'

const codeIcon = <FontAwesomeIcon color="blue" icon={faCode} />;
const heartIcon = <FontAwesomeIcon color="red" icon={faHeart} />;



const Footer = ({darkMode}) => {
    return ( 
    <div className={darkMode?'footer-dark':"footer"}>
      <div className="footer-main">
      <div className="footer-logo-cont">
      <img className="footer-logo" src={foterLogo} alt=""/>
      </div>
      <div className='footer-menu'>
      <div className="menu-item">
      <p className="menu-item-header">Quick Links</p>
      <ul>
      <li><a target="_blank" href="/blog/"> Blog</a></li>
      <li><a target="_blank" href="https://drive.google.com/file/d/1kMcBfxSUhllZhsPr3BFPUA9k4Df2c_Y5/view?usp=sharing">Resume</a></li>
      <li><a target="_blank" href="https://github.com/esiebomaj">GitHub</a></li>
      </ul>
      </div>
      <div className="menu-item">
      <p className="menu-item-header">Socials</p>
      <ul>
      <li><a target="_blank" href="https://www.linkedin.com/in/jeremiahesieboma"><FaLinkedinIn/>Linkedin</a></li>
      <li><a target="_blank" href="https://www.instagram.com/jesieboma/"><FaInstagram/>Instagram</a></li>
      <li><a target="_blank" href="https://www.facebook.com/esiebomaj"><FiFacebook/>Facebook</a></li>
      <li><a target="_blank" href="https://www.twitter.com/esiebomaj"><FiTwitter/>Twitter</a></li>
      </ul></div>
      <div className="menu-item">
      <p className="menu-item-header">Contact</p>
      <ul>
      <li><FiMail/>esiebomaj@gmail.com</li>
      <li><a target="_blank" ><FiPhoneCall/>+234 9055 808223</a></li>
      <li><a target="_blank" href="https://wa.me/2349055808223/"><FaWhatsapp/>WhatsApp</a></li>
      </ul></div>
      </div>
      </div>
      <p className="footer-text">
         Made with {heartIcon} and {codeIcon} by{" "}
         <a href="https://github.com/esiebomaj">JeremAIh</a>
      </p>
    </div>
     );
}

export default Footer;
