import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../logo/Logo";
import Social from "../socials/Social";

const Navigation = (Img) => {
  return (
    <div className="siteheader">
      <div className="nav">
        <div className="nav__logo">
          <Logo />
        </div>
        <ul>
          <li className="mainnav">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/children">Children</Link>
          </li>
        </ul>
        <div className="nav__social">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
