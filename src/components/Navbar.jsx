import React from 'react'
import logo from '../assets/images/icon.png'
import '../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar" id='home'>
      <div className="nav-left">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="nav-right">
        <ol className='page-links nav-content'>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </div>
    </nav>
  )
}

export default Navbar