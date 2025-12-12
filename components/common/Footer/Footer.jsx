import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: '#' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiLinkedin />, url: '#' },
    { icon: <FiInstagram />, url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Biofactor</h3>
            <p className="footer-text">
              Leading manufacturer of high-quality pharmaceutical and nutraceutical products.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>123 Industry Zone, Mumbai, India</span>
              </div>
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+91 1234567890</span>
              </div>
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <span>info@biofactor.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Social media link ${index}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="newsletter">
              <h4>Subscribe to Newsletter</h4>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Biofactor. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;