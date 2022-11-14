import React from "react";
import "./SettingUpTwo.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const SettingUpTwo = () => {
  return (
    <div className="SettingUpOne__container">
      <nav className="SettingUpOne__nav">
        <div className="SettingUpOne__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="SettingUpOne__link">
          Sign In
        </Link>
      </nav>

      <div className="SettingUpTwo__wrapper">
        <div className="SettingUpTwo__header">
          <div className="SettingUpTwo__text">
            <p className="SettingUpOne__step">
              STEP <strong>1</strong> OF <strong>3</strong>
            </p>
            <h1>Create a password to start your membership</h1>
            <p>
              Just a few more steps and you're done! <br /> We hate paperwork,
              too.
            </p>
          </div>
          <div className="SettingUpTwo__form">
            <div className="SettingUpTwo__input">
              <input type="text" required />
              <span className="SettingUpTwo__span">Email</span>
            </div>
            <div className="SettingUpTwo__input">
              <input type="Password" required />
              <span className="SettingUpTwo__span">Add a password</span>
            </div>
            <div className="SettingUpTwo__checkbox">
              <input type="checkbox" className="checkboxStep" />
              <span className="SettingUpTwo__offer">
                Yes, please email me Netflix special offers.
              </span>
            </div>
            <button className="SettingUpTwo__links" type="submit">
              <Link to="/settingUpThree" className="SignIn__logIn-link">
                Next
              </Link>
            </button>
          </div>
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

export default SettingUpTwo;
