import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/contact.css";

const ContactPage = (props) => {
  useEffect(()=> {
    document.title = props.title;
  })
  return (
    <>
      <div className="contact-box">
        <nav>
          <Link to="/" className="home-btn nav-btn">
            Home
          </Link>
          <Link to="/about" className="about-btn nav-btn">
            About
          </Link>
          <Link to="/clients" className="clients-btn nav-btn">
            Clients
          </Link>
          <Link to="/contact" className="contact-btn nav-btn active">
            Contact
          </Link>
        </nav>
        <h1>Contact</h1>
        <form
          action="https://formsubmit.co/63851fdf6d90b3424773fc5b1f233547"
          method="POST"
        >
          <div className="label-input-container">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="label-input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="label-input-container">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
