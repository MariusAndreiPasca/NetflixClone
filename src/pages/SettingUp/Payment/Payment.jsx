import React from "react";
import "./Payment.css";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import lock from "../../../assets/Lock.png";
import { BsCheck2, BsLockFill } from "react-icons/bs";
import { SiVisa, SiAmericanexpress, SiPaypal, SiNetflix } from "react-icons/si";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="Payment__container">
      <nav className="ChoosePlan__nav">
        <div className="ChoosePlan__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="ChoosePlan__signOut">
          Sign Out
        </Link>
      </nav>

      <div className="Payment__content">
        <div className="Payment__image">
          <img src={lock} alt="lock icon" />
        </div>
        <div className="Payment__text">
          <p className="SettingUpThree__step">
            STEP <strong>3</strong> OF <strong>3</strong>
          </p>
          <h1>Choose how to pay</h1>
          <h3>You're getting the Premium Plan.</h3>
          <div className="Payment__benefits">
            <p>
              <BsCheck2 className="Payment__tick" /> Unlimited TV shows and
              movies
            </p>
            <p>
              <BsCheck2 className="Payment__tick" /> Best video quality in 4K
              and HDR
            </p>
            <p>
              <BsCheck2 className="Payment__tick" /> Watch on phone, tablet,
              computer or TV
            </p>
            <p>
              <BsCheck2 className="Payment__tick" /> Cancel easily online
              anytime
            </p>
          </div>
        </div>

        <div className="Payment__methods">
          <p>
            End-to-end encrypted <BsLockFill className="Payment__lock" />
          </p>
          <div className="Payment__method">
            <Link to="/creditcard" className="Payment__method-box">
              <div className="Payment__method-title">
                <p>
                  Credit or Debit Card
                  <SiVisa className="VisaLogo" />
                  <FaCcMastercard className="MasterLogo" />
                  <SiAmericanexpress className="ExpressLogo" />
                </p>
                <RiArrowRightSLine className="Payment__arrow" />
              </div>
            </Link>
            <Link to="/paypal" className="Payment__method-box">
              <p>
                PayPal <SiPaypal className="PaypalLogo" />
              </p>
              <RiArrowRightSLine className="Payment__arrow" />
            </Link>

            <Link to="/giftcard" className="Payment__method-box">
              <p>
                Gift Code <SiNetflix className="NetflixLogo" />
              </p>
              <RiArrowRightSLine className="Payment__arrow" />
            </Link>
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

export default Payment;
