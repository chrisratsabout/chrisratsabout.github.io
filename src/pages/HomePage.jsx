import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
const HomePage = () => {
  return (
    <>
      <nav>
        <Link to="/" className="home-btn nav-btn active">
          Home
        </Link>
        <Link to="/about" className="about-btn nav-btn">
          About
        </Link>
        <Link to="/clients" className="clients-btn nav-btn">
          Clients
        </Link>
        <Link to="/contact" className="contact-btn nav-btn">
          Contact
        </Link>
      </nav>
      <div className="content-container">
        <div className="home-text">
          <img src="src/images/logo.png" alt="logo" />
          <h1>Chris Ratsabout</h1>
          <p>
            <span className="gray-text">Full Stack Developer</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
