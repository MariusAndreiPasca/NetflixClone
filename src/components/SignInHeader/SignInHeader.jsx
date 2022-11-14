import React from "react";
import "./SignInHeader.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const SignInHeader = () => {
  return (
    <div className="SignInHeader__container">
      <div className="SignInHeader__wrapper">
        <div className="SignInHeader__text">
          <h1 className="SignInHeader__title">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="SignInHeader__promo">
            Watch anywhere. Cancel anytime.
          </h2>
        </div>
        <form>
          <div className="SignInHeader__form">
            <h3 className="SignInHeader__para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="SignInHeader__getStarted">
              <div className="SignInHeader__email">
                <input className="SignInHeader__input" />
                <span className="SignInHeader__span">Email Address</span>
              </div>
              <Link to="/settingUpOne" className="SignInHeader__button">
                Get Started <MdKeyboardArrowRight className="arrowToRight" />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInHeader;
