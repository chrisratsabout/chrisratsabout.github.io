import React, { useEffect } from "react";
import "../css/thanks.css";
import { Link } from "react-router-dom";

const ThanksPage = (props) => {
  useEffect(() => {
    document.title = props.title;
  });
  return (
    <>
      <div className="thanks-message-container">
        <h2>Thank You!</h2>
        <p>
          Your message has been received. Please allow 24-48 hours for a
          response.
        </p>
        <Link to="/"><button>Back To Home</button></Link>
      </div>
    </>
  );
};

export default ThanksPage;
