import React from "react";
import "./LogIn.css";
import logo from "../../assets/Netflix-Logo.wine.svg";
import LogInFooter from "../../components/LogInFooter/LogInFooter";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="LogIn__container">
      <div className="LogIn__logo">
        <img src={logo} className="logo" alt="netflix logo" />
      </div>
      <div className="LogIn__form">
        <h1 className="LogIn__title">Sign In</h1>
        <form className="LogIn__data">
          <div className="LogIn__account">
            <input className="LogIn__input" type="text" required />
            <span className="LogIn__span">Email or phone number</span>
          </div>
          <div className="LogIn__account">
            <input type="password" className="LogIn__input" required />
            <span className="LogIn__span">Password</span>
          </div>
          <button type="submit" className="LogIn__submitButton">
            <Link className="SignIn__logIn-link" to="/settingUpOne">
              Sign In
            </Link>
          </button>
          <div className="LogIn__form-options">
            <div className="loginFormCheckBox">
              <input type="checkbox" className="checkbox" />
              <label className="label">Remember me</label>
            </div>

            <Link className="help" href="#">
              Need Help?
            </Link>
          </div>
          <div className="LogIn__signUp">
            <p className="signUp">
              New to Netflix?
              <Link className="LogIn__link" to="/signin">
                {" "}
                Sign up now
              </Link>
              .
            </p>
            <p className="protection">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a className="learn" href="#">
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>
      <LogInFooter className="LogIn__footer" />
    </div>
  );
};

export default LogIn;
