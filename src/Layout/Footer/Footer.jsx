import React from 'react'
import './Footer.css'
import mailIcon from '../../assets/mail_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import locationIcon from '../../assets/location_icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-logo-text">
              <span className="footer-name">Phương</span>
              <span className="footer-title">FullStack</span>
            </div>
            <p>Creating digital experiences that inspire and engage</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span>kuem271003@gmail.com</span>
          </div>
          <div className="contact-item">
            <img src={callIcon} alt="Phone" />
            <span>+84 982 078 899</span>
          </div>
          <div className="contact-item">
            <img src={locationIcon} alt="Location" />
            <span>Da Nang City, Vietnam</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/ducati.phuong.3" className="social-link">Facebook</a>
            <a href="https://github.com/kuem271003" className="social-link">GitHub</a>
            <a href="https://x.com/kuem271003" className="social-link">Twitter</a>
            <a href="https://www.instagram.com/hphuong271003/" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
