import React from 'react'
import "../Css/nav.css"
import { motion } from 'framer-motion';
import { textVariant } from '../motion/motion';
import PakshalaLogo from "../assets/pakshalalogo.png"
import Icon1 from '../assets/nav-icon1.svg';
import Icon2 from '../assets/nav-icon2.svg';
import Icon3 from '../assets/nav-icon3.svg';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <motion.div className="footer" variants={textVariant(.3)} initial="hidden" whileInView="show" viewport={{once:"true"}}>
        <div className='footer-text'>
        <div className='logo'>
            <img src={PakshalaLogo} alt="PakshalaLogo" className='footer-logo'/>
        </div>
        <div className="find-Us">
            <h2>Find us in social media</h2>
             <div className="social-icon">
                <a href="#"><img src={Icon1} alt="" /></a>
                <a href="#"><img src={Icon2} alt="" /></a>
                <a href="#"><img src={Icon3} alt="" /></a>
              </div>
              <h2 style={{marginTop:"1rem"}}>Contact us in</h2>
              <p>014 5844939</p>
              <p>+977 9487473774</p>
              <p>pakshala@restro.np</p>
        </div>
        <div className="footer-community">
            <h2>Community</h2>
            <p>Blog</p>
            <p>Community</p>
            <p>Ideas</p>
            <p>Developers</p>
        </div>
        <div className="our-services">
            <h2>Our Services</h2>
            <p>Restaurant</p>
            <p>Dining</p>
            <p>Rooftop Dining</p>
            <p>Event venue</p>
            <p>Rooms and reservation</p>
        </div>
        <div className="quick-links">
            <h2>Quick links</h2>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/menu">
                <p>Menu</p>
            </Link>
            <Link to="/rooms">
                <p>Rooms</p>
            </Link>
            <Link to="/tables">
                <p>Tables</p>
            </Link>
            <Link to="/about">
                <p>About</p>
            </Link>
        </div>
        </div>
        <span className='footer-last'>Privacy Policy | Terms & Condition | Cookie Center | Security & Safety | | © 2024 Pakshala Restro</span>
    </motion.div>
  )
}

export default Footer
