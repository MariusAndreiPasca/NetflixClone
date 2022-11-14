import React from "react";
import "./PayPal.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const PayPal = () => {
  return (
    <div className="PayPal__container">
      <nav className="CreditCard__nav">
        <div className="CreditCard__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="CreditCard__signOut">
          Sign Out
        </Link>
      </nav>
      <div className="PayPal__main">
        <p className="CreditCard__step">
          STEP <strong>3</strong> OF <strong>3</strong>
        </p>
        <h1>Set up your PayPal</h1>
        <div className="CreditCard__plan">
          <div className="CreditCard__planType">
            <p className="CreditCard__price">€17,99/month</p>
            <p className="CreditCard__type">Premium Plan</p>
          </div>
          <Link to="/choosePlan" className="CreditCard_change">
            Change
          </Link>
        </div>
        <p>
          To finish signup, click the <strong>Continue to PayPal</strong> button
          and log in to PayPal using your email and password.
        </p>
        <Link to="/netflix" className="CreditCard__submit">
          Continue to PayPal
        </Link>
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

export default PayPal;
