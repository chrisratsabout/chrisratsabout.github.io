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
            <img
              className="client-logo"
              src="images/clients/jamie-drake-art.png"
              alt=""
            />
            <img
              className="client-logo"
              src="images/clients/the-murmurations.png"
              alt=""
            />
            <img
              className="client-logo"
              src="images/clients/del-aura.png"
              alt=""
            />
            <img
              className="client-logo"
              src="images/clients/lasidas.png"
              alt=""
            />
            <img
              className="client-logo"
              src="images/clients/talltale-tavern.png"
              alt=""
            />
            <img
              className="client-logo"
              src="images/clients/tomniscient.png"
              alt=""
            />

            {/* <p>The Murmurations</p>
                        <p>Jamie Drake</p>
                        <p>Del Aura</p>
                        <p>Lasidas</p>
                        <p>Talltale Tavern</p>  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsPage;
