import React from 'react';
import '../App.css';
import underConstructionGif from '../assets/under-construction.gif'; // Ensure the path is correct

function Home() {
  return (
    <div className="under-construction-container">
      <div className="breadcrumb-nav">
        <ul>
          <li><a href="/">Home »»</a></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <img src={underConstructionGif} alt="Under Construction" className="under-construction-gif" />
      <h1 className="under-construction-header">Under Construction</h1>
    </div>
  );
}

export default Home;
