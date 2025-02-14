import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaTimesCircle, FaShareSquare } from 'react-icons/fa'; // Change here
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import confetti from 'canvas-confetti';
import '../../components/Navbar/Navbar.css'; // Import CSS file
import freshLogo from '../../assets/Untitled design 1.png';

function Navbar() {
  const logoRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu
  const [isAdVisible, setIsAdVisible] = useState(true); // State for ad strip visibility
  const [theme, setTheme] = useState('light'); // State for theme mode

  // Load the current theme from local storage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; // Apply theme to the html for full coverage
  }, []);

  // Apply theme to the document body when theme changes
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleLogoClick = () => {
    if (logoRef.current) {
      const { left, top, width, height } = logoRef.current.getBoundingClientRect();
      confetti({
        particleCount: 2000,
        spread: 500,
        origin: {
          x: (left + width / 2) / window.innerWidth,
          y: (top + height / 2) / window.innerHeight,
        },
      });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const closeAdStrip = () => {
    setIsAdVisible(false); // Hide the ad strip
  };

  // Toggle light/dark theme and save to local storage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Update HTML class
    localStorage.setItem('theme', newTheme); // Save the new theme in local storage
  };

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fresh & More',
          text: 'Check out Fresh & More!',
          url: window.location.href,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy the URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Could not copy text:', error);
      }
    }
  };

  return (
    <>
      {/* Ad Strip (only visible if isAdVisible is true) */}
      {isAdVisible && (
        <div className="ad-strip">
          <div className="ad-container">
            <div className="ad-item">Visit M&QR.com</div>
            <div className="ad-item">Static websites for stores</div>
            <div className="ad-item">B.E Final Year Projects Available</div>
          </div>
          {/* Close Button for the ad strip */}
          <div className="close-ad" onClick={closeAdStrip}>
            <FaTimesCircle />
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className={`navbar ${theme}`}>
        <div className="logo" onClick={handleLogoClick} ref={logoRef}>
          {/* Add the image next to Fresh & More */}
          <img src={freshLogo} alt="Fresh & More Logo" className="logo-icon" />
          Fresh & More
        </div>

        {/* Menu Icon for mobile */}
        <div className="menu-icon" onClick={toggleDropdown}>
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isDropdownOpen ? 'show-dropdown' : ''}`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown} // Close dropdown on link click
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
              Contact
            </NavLink>
          </li>
                    <li>
            <NavLink
              to="/sqlplus"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={toggleDropdown}
            >
             . 
            </NavLink>
          </li>
        </ul>

        {/* Theme toggle and Share buttons */}
        <div className="navbar-icons">
          <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </div>
          <div className={`share-icon ${theme}`} onClick={handleShare}>
            <FaShareSquare /> {/* Changed icon */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
