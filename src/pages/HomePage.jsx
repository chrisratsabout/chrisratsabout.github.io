import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
const HomePage = (props) => {
  useEffect(()=> {
    document.title = props.title;
  })
  return (
    <>
    <div className="wrapper">
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
          <img src="images/logo.png" alt="logo" />
          <h1>Chris Ratsabout</h1>
          <p>
            <span className="gray-text">Full Stack Developer</span>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
