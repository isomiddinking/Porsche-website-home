import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Footer.css';

import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Current Region / Language Section */}
        <div className="footer-section current-region" data-aos="fade-up" data-aos-delay="100">
          <h3>Current Region / Language</h3>
          <div className="region-selector">
            <img src="https://flagcdn.com/us.svg" alt="United States flag" className="flag-icon" /> {/* Rasmingizni joylashtiring */}
            <span>United States / English</span>
            <a href="#" className="change-link">Change</a>
          </div>
        </div>

        {/* Locations & Contacts Section */}
        <div className="loactionssss">
        <div className="footer-section locations-contacts" data-aos="fade-up" data-aos-delay="200">
          <h3>Locations & Contacts</h3>
          <p>Do you have any questions?</p>
          <button className="get-in-touch-btn">Get in touch</button>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media" data-aos="fade-up" data-aos-delay="300">
          <h3>Social Media</h3>
          <p>Get in touch with us via social media.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF className="icon" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="icon" /></a>
            <a href="#" aria-label="Pinterest"><FaPinterestP className="icon" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="icon" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="icon" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="icon" /></a>
          </div>
        </div>
        </div>

        {/* Company & Support Section */}
        <div className="footer-section company-support-section" data-aos="fade-up" data-aos-delay="400"> {/* company-support-wrapper dan company-support-section ga o'zgartirildi */}
          <h3>Company & Support</h3>
          <div className="company-support-columns">
            <ul className="support-list">
              <li><a href="#">Porsche Cars North America</a></li>
              <li><a href="#">Global Partnership Council</a></li>
              <li><a href="#">Newsroom & Press</a></li>
            </ul>
            <ul className="support-list">
              <li><a href="#">Recall Information</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
            <ul className="support-list">
              <li><a href="#">Career</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="footer-bottom">
        <p className="copyright-text">
          &copy; 2025 Porsche Cars North America, Inc. Legal notice. <a href="#">Privacy notice.</a> <a href="#">California Privacy.</a> <a href="#">Accessibility Statement.</a> NMLS #3164 <a href="#">Open Source Software Notice.</a> <a href="#">Do Not Sell or Share My Personal Information.</a> <a href="#">Whistleblower System.</a> <a href="#">Emergency Responders.</a> <a href="#">In-Use Verification Program.</a> <a href="#">Certification of Compliance.</a> <a href="#">How to Disconnect Remote Vehicle Access.</a>
        </p>
        <div className="porsche-logo-bottom" data-aos="fade-zoom-in" data-aos-delay="500">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Porsche_logo.svg/1200px-Porsche_logo.svg.png" alt="Porsche Logo" /> {/* Rasmingizni joylashtiring */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;