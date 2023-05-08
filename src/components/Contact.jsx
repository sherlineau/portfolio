import React from "react";
import Title from "./Title";
import '../assets/css/Contact.css'

const Contact = () => {
  return (
    <div className="section" id="contact">
      <Title title="Contact" />
      <div className="section-center contact-center">
        <p>
        If you have any job opportunities, projects, or other related inquiries, please feel free to contact me. I look forward to hearing from you and exploring how I can contribute to your needs. Thank you for your consideration.
        </p>
        <a
          href="mailto:sherlineau7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
