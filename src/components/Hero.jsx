import React from "react";
import SocialLinks from "../constants/SocialLinks";
import { BsChevronDoubleUp } from "react-icons/bs";
import '../assets/css/Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h3>Hi, my name is</h3>
            <h1>Sherline Au</h1>
            <h3>I like making things for the web.</h3>
            <p>
              
            </p>
          </div>
        </article>
        <div className="social-wrapper">
          <a href="/#home">
            <BsChevronDoubleUp className="social-link up"></BsChevronDoubleUp>
          </a>
          <SocialLinks styleClass="social-link"></SocialLinks>
          <div className="line" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
