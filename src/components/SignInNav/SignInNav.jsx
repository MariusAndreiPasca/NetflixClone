import React from "react";
import "./SignInNav.css";
import logo from "../../assets/Netflix-Logo.wine.svg";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInNav = () => {
  return (
    <div className="navbar__wrapper">
      <nav className="SignIn__navbar">
        <div className="SignIn__logo">
          <img src={logo} alt="" />
        </div>

        <div className="SignIn__navbar-right">
          <div className="SignIn__languages">
            <FaGlobe className="icon" />
            <select name="languages" id="languages">
              <option value="english">English</option>
              <option value="deutsch">Deutsch</option>
            </select>
          </div>

          <Link to="/signin" className="SignIn__button">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SignInNav;
