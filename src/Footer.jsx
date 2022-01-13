import React from 'react'
import logo from "./images/logo.svg"
import './styles/Footer.scss'
import location from "./images/icon-location.svg"
import phone from "./images/icon-phone.svg"
import email from "./images/icon-email.svg"

export default function Footer(props) {
    

    return (
        <footer>
        
            <img src={logo} alt="logo" className='footer-logo' />
            <div className='footer-wrap'>
                <div className='footer-layout'>
                    <img src={location} alt="location" />
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='email-phone'>
                    <div className='footer-layout'>
                        <img src={phone} alt="phone" />
                        <p>  +1-543-123-4567</p>
                    </div>
                    <div className='footer-layout'>
                        <img src={email} alt="email" />
                        <p>example@fylo.com</p>
                    </div>
                </div>

                <div className='lists'>
                    <ul>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='socials'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>
        </footer>
    )
}
