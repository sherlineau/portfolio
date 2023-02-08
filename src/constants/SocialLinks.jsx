import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <BsLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/sherlineau/",
  },
  {
    id: 2,
    icon: <BsGithub className="social-icon" />,
    url: "https://github.com/sherlineau",
  },
  {
    id: 3,
    icon: <BsInstagram className="social-icon" />,
    url: "https://www.instagram.com/sherlineau/",
  },
];

const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        {link.icon}
      </a>
    </li>
  );
});

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};

export default SocialLinks;