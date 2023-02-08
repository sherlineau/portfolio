import React from 'react';
import { Link } from 'gatsby';
import '../assets/css/layout.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <main className="content">{children}</main>
    <Footer />
  </React.Fragment>
);

export default Layout;