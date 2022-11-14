import React from "react";
import "./GiftCard.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const GiftCard = () => {
  return (
    <div className="GiftCard__container">
      <nav className="ChoosePlan__nav">
        <div className="ChoosePlan__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="ChoosePlan__signOut">
          Sign Out
        </Link>
      </nav>
      <div className="GiftCard__main">
        <p className="CreditCard__step">
          STEP <strong>3</strong> OF <strong>3</strong>
        </p>
        <h1>Enter your gift code</h1>
        <div className="CrediCard__data">
          <input className="CreditCard__input" type="text" />
          <span className="CreditCard__span">Gift Card Pin or Code</span>
        </div>
        <div className="CreditCard__plan">
          <div className="CreditCard__planType">
            <p className="CreditCard__price">€17,99/month</p>
            <p className="CreditCard__type">Premium Plan</p>
          </div>
          <Link to="/choosePlan" className="CreditCard_change">
            Change
          </Link>
        </div>
        <Link to="/netflix" className="CreditCard__submit">
          Redeem Gift Code
        </Link>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        </p>
        <a href="#">Learn more.</a>
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

export default GiftCard;
