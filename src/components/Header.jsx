import React from "react";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <img
        src="/src/assets/images/logo.jpg"
        alt="Airbnb Logo"
        className="navbar-logo"
      />
      <span className="navbar-text">Airbnb</span>
    </nav>
    <div className="experience-header">
      <h1>Online Experiences</h1>
    </div>
    <p>
      Join unique interactive activities led by one-of-a-kind hosts—all without
      leaving home.
    </p>
    <div className="experience-images">
      <img src="/src/assets/images/katie.jpg" alt="Experience 1" />
      <img src="/src/assets/images/katie.jpg" alt="Experience 2" />
      <img src="/src/assets/images/mountain-biking.jpg" alt="Experience 3" />
      <img
        src="/src/assets/images/wedding-photography.jpg"
        alt="Experience 4"
      />
      <img src="/src/assets/images/katie.jpg" alt="Experience 5" />
      <img src="/src/assets/images/katie.jpg" alt="Experience 6" />
      <img src="/src/assets/images/katie.jpg" alt="Experience 7" />
      <img src="/src/assets/images/katie.jpg" alt="Experience 8" />
    </div>
  </header>
);

export default Header;
