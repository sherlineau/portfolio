import React from "react";
import FooterLinks from "../constants/SocialLinks";
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Designed & Developed by Sherline Au</p>
        <p>&copy; {new Date().getFullYear()}</p>
        <FooterLinks styleClass="footer-link"></FooterLinks>
      </div>
    </footer>
  );
};

export default Footer;
