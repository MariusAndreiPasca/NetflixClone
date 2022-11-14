import React from "react";
import "./CreditCard.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaCcMastercard } from "react-icons/fa";
import { SiVisa, SiAmericanexpress } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";

const CreditCard = () => {
  return (
    <div className="CreditCard__container">
      <nav className="CreditCard__nav">
        <div className="CreditCard__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="CreditCard__signOut">
          Sign Out
        </Link>
      </nav>
      <div className="CreditCard__main">
        <div className="CreditCard__text">
          <p className="CreditCard__step">
            STEP <strong>3</strong> OF <strong>3</strong>
          </p>
          <h1>Set up your credit or debit card</h1>
          <div className="CreditCard__logos">
            <SiVisa className="VisaLogo" />
            <FaCcMastercard className="MasterLogo" />
            <SiAmericanexpress className="ExpressLogo" />
          </div>
          <form className="CreditCard__cardData">
            <div className="CrediCard__data">
              <input className="CreditCard__input" type="text" />
              <span className="CreditCard__span">First name</span>
            </div>
            <div className="CrediCard__data">
              <input className="CreditCard__input" type="text" />
              <span className="CreditCard__span">Last name</span>
            </div>
            <div className="CrediCard__data">
              <input className="CreditCard__input" type="text" />
              <span className="CreditCard__span">Card number</span>
            </div>
            <div className="CrediCard__data">
              <input className="CreditCard__input" type="text" />
              <span className="CreditCard__span">Expiration date (MM/YY)</span>
            </div>
            <div className="CrediCard__data">
              <input className="CreditCard__input" type="text" />
              <span className="CreditCard__span">Security code (CVV)</span>
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
            <div className="CreditCard__checkbox">
              <input type="checkbox" className="checkboxStep" />
              <p>
                You agree that your membership will begin immediately, and
                acknowledge that you will therefore lose your right of
                withdrawal
              </p>
            </div>
            <p className="CreditCard__info">
              By clicking the “Start Paid Membership” button below, you agree to
              our <a href="#">Terms of Use</a> and that you are over 18 and
              acknowledge the <a href="">Privacy Statement</a>. Netflix will
              automatically continue your membership and charge the membership
              fee (currently €17,99/month) to your payment method until you
              cancel. You may cancel at any time to avoid future charges.
            </p>
            <Link to="/netflix" className="CreditCard__submit">
              Start Paid Membership
            </Link>
          </form>
        </div>
      </div>
      <div className="SettingUpOne__footer creditCardFooter">
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

export default CreditCard;
