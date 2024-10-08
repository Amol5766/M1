import React from 'react';
import '../../App.css';
import underConstructionGif from '../../assets/under-construction.gif';

function Contact() {
  return (
    <div className="under-construction-container">
      <div className="breadcrumb-nav">
        <ul>
          <li><a href="/">Home »»</a></li>
          <li></li>
          <li>Contact</li>
        </ul>
      </div>
      <img src={underConstructionGif} alt="Under Construction" className="under-construction-gif" />
      <h1 className="under-construction-header">Under Construction</h1>
    </div>
  );
}

export default Contact;
