import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/clients.css";

const ClientsPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return (
    <>
      <nav>
        <Link to="/" className="home-btn nav-btn">
          Home
        </Link>
        <Link to="/about" className="about-btn nav-btn">
          About
        </Link>
        <Link to="/clients" className="clients-btn nav-btn active">
          Clients
        </Link>
        <Link to="/contact" className="contact-btn nav-btn">
          Contact
        </Link>
      </nav>
      <div className="clients-box">
        <h1>Clients</h1>
        <div className="clients-inner-box">
          <div className="clients-logo-box">
            <div className="client-card">
              <a href="https://sobreratas.github.io/jamie-test/" target="blank">
                <img src="images/clients/jamie-drake-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/jamie-drake-art.png"
                alt=""
              />
            </div>
            <div className="client-card">
              <a
                href="https://sobreratas.github.io/the-murmurations"
                target="blank"
              >
                <img src="images/clients/the-murmurations-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/the-murmurations.png"
                alt=""
              />
            </div>
            <div className="client-card">
              <a href="https://sobreratas.github.io/del-aura" target="blank">
                <img src="images/clients/del-aura-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/del-aura.png"
                alt=""
              />
            </div>
            <div className="client-card">
              <a href="https://sobreratas.github.io/lasidas" target="blank">
                <img src="images/clients/lasidas-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/lasidas.png"
                alt=""
              />
            </div>
            <div className="client-card">
              <a
                href="https://sobreratas.github.io/talltale-tavern"
                target="blank"
              >
                <img src="images/clients/talltale-tavern-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/talltale-tavern.png"
                alt=""
              />
            </div>
            <div className="client-card">
              <a href="https://sobreratas.github.io/tomniscient" target="blank">
                <img src="images/clients/tomniscient-cover.jpg" alt="" />
              </a>
              <img
                className="client-logo"
                src="images/clients/tomniscient.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsPage;
