import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsArrowUpCircle } from 'react-icons/bs'
import {
    FiMail, 
    FiInstagram, 
    FiFacebook, 
    FiLinkedin, 
    FiDribbble,
    FiGithub
} from 'react-icons/fi'
import './FooterStyles.css'

import {Link} from 'react-scroll'

const Footer = () => {
    const footerHeader = ['Navigation', 'My Account', 'Information', 'legal']
    const footerMenu = ['Home', 'Data', 'Cloud', 'Contact'];
    const footerIcons = [FiInstagram, FiFacebook, FiLinkedin, FiDribbble, FiGithub];

  return (
    <div className="footer"> 
        <div className="container">
            <div className="top">
                <div className="logo-footer">
                    <SiDatabricks className='icon' />
                    <h2>Secured.</h2>
                </div>
                <Link 
                    activeClass="active" 
                    to="top" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    >
                    <BsArrowUpCircle className='icon' />
                </Link>
            </div>
            <div className="col-container">
                {footerHeader.map((header, index) => (
                    <div className="col" key={index}>
                        <h3>{header}</h3>
                        {footerMenu.map((menuItem, index) => (
                            <p key={index}>{menuItem}</p>
                        ))}
                    </div>
                ))}
                <form action="">
                    <h3>Join Our Team</h3>
                    <input type="email" placeholder="Enter your email"/>
                    <FiMail className='mail-icon' />
                    <div className="social-group">
                        {footerIcons.map((Icon, index) => (
                            <div key={index}>
                                <Icon className="social-icons" />
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer