import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const setActiveClass = (e) => {
    const navBtns = document.querySelectorAll(".nav-btn");
    navBtns.forEach((navBtn) => {
      navBtn.classList.remove("active");
    });

    e.target.classList.add("active");
  }
  return (
    <>
     <nav>
      <Link
        to="/"
        className="home-btn nav-btn active"
      
      >
        Home
      </Link>
      <Link
        to="/about"
        className="about-btn nav-btn"
      
      >
        About
      </Link>
      <Link
        to="/clients"
        className="clients-btn nav-btn"
      
      >
        Clients
      </Link>
      <Link
        to="/contact"
        className="contact-btn nav-btn"
      
      >
        Contact
      </Link>
    </nav>
    </>
  );
};

export default NavBar;
