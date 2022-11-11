import React from "react";
import "./Social.css";

//import facebook, instagram, linkedin icons
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="socialMedia">
      {/* this component will return social media of the page */}
      <a href="https://www.facebook.com/dejene.daba.73/">
        <FaFacebook className="socialMedia__icon" />
      </a>
      <a href="https://www.instagram.com/oddacommunitychurch/">
        <FaInstagram className="socialMedia__icon" />
      </a>
      <a href="https://www.linkedin.com/company/oddacommunitychurch/">
        <FaLinkedin className="socialMedia__icon" />
      </a>
    </div>
  );
};

export default Social;
