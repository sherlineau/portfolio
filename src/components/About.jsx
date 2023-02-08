import React from 'react'
import { TiChevronRight } from "react-icons/ti";
import Title from "./Title"
import profileImage from "/src/assets/images/S-ProfileImage.jpg"
import '../assets/css/About.css'

const technologies = ['HTML', 'CSS', 'MERN', 'C#', 'C++', '.ASPNET', 'Python', 'Unreal Engine']

const About = () => {
  return (
    <div className='section about' id='about'>
      <Title title="About Me" />
      <div className="about-center">
        <div className="about-left">
          <img src={profileImage} alt="profile" className='profile-img' />
        </div>
        <div className="about-right">
          <p className='about-description'>Detailed-oriented Full Stack Developer with a keen interest in front-end web development, UI/UX design and game development. Proficient in using object-oriented programming languages such as C#, C++, JavaScript, and Python. Possess the ability to quickly adapt to new technologies. Graduated from Southern New Hampshire University with a degree in Game Programming and Developement.</p>
          <p>A few technologies I have worked with:</p>
          <ul className="tech-list">
            {technologies.map((tech, i) => {
              return (
                <li key={i} className='list-item'>
                  <TiChevronRight className='tech-icon' />
                  {tech}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About