import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <nav>
        <Link to="/" className="home-btn nav-btn">
          Home
        </Link>
        <Link to="/about" className="about-btn nav-btn active">
          About
        </Link>
        <Link to="/clients" className="clients-btn nav-btn">
          Clients
        </Link>
        <Link to="/contact" className="contact-btn nav-btn">
          Contact
        </Link>
      </nav>
      <div className="about-box">
        <div className="about-text-container">
          <h1>About</h1>
          <img
            src="images/headshot-square.jpg"
            alt="Chris Ratsabout headshot"
          />
          <p>
            <strong>Chris Ratsabout</strong> is a passionate{" "}
            <span className="gray-text">Full Stack Developer</span> who
            specializes in <span className="gray-text">UI/UX Design</span>. With
            his knowledge in various frontend and backend technologies, he can
            make your dream website or application come to life with 100%
            customization. He is open to collaboration and for more details,
            please fill out the contact form{" "}
            <span>
              <Link
                to="/contact"
                className="blue-text here"
              >
                here
              </Link>
            </span>
            .
          </p>
        </div>

        {/* Logo Scroll */}
        <div className="logos">
          <div className="logos-slide">
            <img src="images/logos/html.png" alt="html" />
            <img src="images/logos/css.png" alt="css" />
            <img src="images/logos/js.png" alt="js" />
            <img src="images/logos/react.png" alt="react" />
            <img src="images/logos/java.png" alt="java" />
            <img src="images/logos/spring.png" alt="spring" />
            <img src="images/logos/postgres.png" alt="postgres" />
            <img src="images/logos/mysql.png" alt="mysql" />
            <img src="images/logos/node.png" alt="node" />
            <img src="images/logos/github.png" alt="github" />
            <img src="images/logos/intellij.png" alt="intellij" />
            <img src="images/logos/vscode.png" alt="vscode" />
          </div>
          <div className="logos-slide">
            <img src="images/logos/html.png" alt="html" />
            <img src="images/logos/css.png" alt="css" />
            <img src="images/logos/js.png" alt="js" />
            <img src="images/logos/react.png" alt="react" />
            <img src="images/logos/java.png" alt="java" />
            <img src="images/logos/spring.png" alt="spring" />
            <img src="images/logos/postgres.png" alt="postgres" />
            <img src="images/logos/mysql.png" alt="mysql" />
            <img src="images/logos/node.png" alt="node" />
            <img src="images/logos/github.png" alt="github" />
            <img src="images/logos/intellij.png" alt="intellij" />
            <img src="images/logos/vscode.png" alt="vscode" />
          </div>
          <div className="logos-slide">
            <img src="images/logos/html.png" alt="html" />
            <img src="images/logos/css.png" alt="css" />
            <img src="images/logos/js.png" alt="js" />
            <img src="images/logos/react.png" alt="react" />
            <img src="images/logos/java.png" alt="java" />
            <img src="images/logos/spring.png" alt="spring" />
            <img src="images/logos/postgres.png" alt="postgres" />
            <img src="images/logos/mysql.png" alt="mysql" />
            <img src="images/logos/node.png" alt="node" />
            <img src="images/logos/github.png" alt="github" />
            <img src="images/logos/intellij.png" alt="intellij" />
            <img src="images/logos/vscode.png" alt="vscode" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
