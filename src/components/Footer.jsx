import React from 'react';
import { FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Footer.css'; // Ensure this path is correct
import Lion from '../assets/Untitled design.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Circle Border Container */}
        <div className="circle-border">
          <img 
            src={Lion} // Use the imported image variable instead
            alt="Logo Icon" 
            className="footer-icon"
          />
        </div>
        <span className="logo-text">Fresh & More</span>

        {/* Three Vertical Blocks Side by Side */}
        <div className="footer-rows">
          <div className="footer-row">
            <h3 style={{ color: '#ff4081' }}>Opens</h3>
            <h4 className="row-3">Monday - Sunday</h4>
            <p>9:30am - 10:00pm</p>
          </div>
          <div className="footer-row">
            <h3 className="footer-row-1" style={{ color: '#ff4081' }}>Contact</h3>
            <p>
              Location
              <a 
                href="https://maps.app.goo.gl/3LsDbtaMGgF2bDAE7?g_st=com.google.maps.preview.copy" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#fff' }}
              >
                : Fish Curry Rice, Kushalnagar, Mysore - Madikeri Rd, opp. Govt Engineering College, Kushalnagar, Baichanalli, Karnataka 571234
              </a>
            </p>
            <p>
              Phone 
              <a 
                href="tel:8088038393"
                style={{ color: '#fff' }}
              >
                : 8088038393
              </a>
            </p>
            <p>
              Email 
              <a 
                href="mailto:example@gmail.com"
                style={{ color: '#fff' }}
              >
                : example@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Find Us Section */}
        <div className="footer-top">
          <h4 className="find-us-header" style={{ color: '#ff4081' }} >Find us on</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/fresh_more_/?igsh=cGtwazBnZWF4ZTFk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon small-icon" />
            </a>
            <a
              href="https://snapchat.com/t/m27qxkUe"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaSnapchatGhost className="social-icon small-icon" />
            </a>
            <a
              href="https://www.instagram.com/safwan_sharon/?igsh=aHprN3dwNG1yOWI4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon small-icon" />
            </a>
          </div>
        </div>

        {/* Bottom Section with Logo and Copyright */}
        <div className="footer-bottom">
          <p className="footer-text">
            Copyright © 2024, website made by Amol❤️ | All rights reserved | 
            <Link to="/terms-of-service" className="footer-link"> Privacy Policy </Link> | 
            <Link to="/terms-of-service" className="footer-link"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
