import React from "react";
import "./social.css";

const Social = () => {
  const socials = [
    {
      href: "https://facebook.com/esiebomaj",
      icon: <i class="fab fa-facebook-f"></i>,
    },
    {
      href: "https://twitter.com/EsiebomaJ",
      icon: <i class="fab fa-twitter"></i>,
    },
    {
      href: "https://github.com/esiebomaj",
      icon: <i class="fab fa-github"></i>,
    },
    {
      href: "https://www.instagram.com/jesieboma/",
      icon: <i class="fab fa-instagram"></i>,
    },
  ];
  return (
    <div className="social">
      {socials.map((item, index) => (
        <a key={index} className="icon" href={item.href}>
          <div className=" icon-container">{item.icon}</div>
        </a>
      ))}
    </div>
  );
};

export default Social;
