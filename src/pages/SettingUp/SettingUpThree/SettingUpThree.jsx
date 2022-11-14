import React from "react";
import "./SettingUpThree.css";
import { BsCheck2 } from "react-icons/bs";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import tick from "../../../assets/tick.png";

const SettingUpThree = () => {
  return (
    <div className="SettingUpThree__container">
      <nav className="SettingUpThree__nav">
        <div className="SettingUpThree__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="SettingUpThree__link">
          Sign In
        </Link>
      </nav>

      <div className="SettingUpThree__header">
        <div className="SettingUpThree__image">
          <img src={tick} alt="tick" />
        </div>
        <div className="SettingUpThree__text">
          <p className="SettingUpThree__step">
            STEP <strong>2</strong> OF <strong>3</strong>
          </p>
          <h1>Choose your plan.</h1>
          <div className="SettingUpThree__plan">
            <BsCheck2 className="tickImg" />
            <p>
              No commitments, cancel <br /> anytime.
            </p>
          </div>
          <div className="SettingUpThree__plan">
            <BsCheck2 className="tickImg" />
            <p>
              Everything on Netflix for one <br /> low price.
            </p>
          </div>
          <div className="SettingUpThree__plan">
            <BsCheck2 className="tickImg" />
            <p>
              Unlimited viewing on all your <br /> devices.
            </p>
            <p></p>
          </div>
        </div>
        <button className="SettingUpThree__links" type="submit">
          <Link className="SignIn__logIn-link" to="/choosePlan">
            Next
          </Link>
        </button>
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

export default SettingUpThree;
