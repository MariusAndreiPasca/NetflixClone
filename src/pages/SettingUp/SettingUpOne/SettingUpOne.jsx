import React from "react";
import "./SettingUpOne.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import devices from "../../../assets/Devices.png";
import { FaGlobe } from "react-icons/fa";

const SettingUpOne = () => {
  return (
    <div className="SettingUpOne__container">
      <nav className="SettingUpOne__nav">
        <div className="SettingUpOne__logo">
          <img className="NetLogo__stepone" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="SettingUpOne__link">
          Sign In
        </Link>
      </nav>
      <div className="SettingUpOne__header">
        <div className="SettingUpOne__wrapper">
          <div className="SettingUpOne__image">
            <img src={devices} alt="devices image" />
          </div>
          <p className="SettingUpOne__step">
            STEP <strong>1</strong> OF <strong>3</strong>
          </p>
          <h3 className="SettingUpOne__heading">
            Finish setting up your account
          </h3>
          <p className="SettingUpOne__para">
            Netflix is personalized for you. Create a password to watch on any
            device at any time.
          </p>
          <button type="submit" className="SettingUpOne__links">
            <Link className="SignIn__logIn-link" to="/settingUpTwo">
              Next
            </Link>
          </button>
        </div>
      </div>
      <div className="SettingUpOne__footer">
        <h3 className="SettingUpOne__title">Questions? Call 0800-297-942</h3>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>

          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>

          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Impressum</a>
          </li>
        </ul>
        <div className="SettingUpOne__language-selector">
          <div className="SettingUpOne__languages">
            <FaGlobe className="globeSetting" />
            <select name="languages" id="languages">
              <option value="english">English</option>
              <option value="deutsch">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingUpOne;
