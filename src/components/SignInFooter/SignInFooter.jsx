import React from "react";
import "./SignInFooter.css";
import { FaGlobe } from "react-icons/fa";

const SignInFooter = () => {
  return (
    <div className="SignInFooter__container">
      <div className="SignInFooter__wrapper">
        <h3 className="SignInFooter__title">Questions? Call 0800-297-942</h3>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Redeem Gift Card</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
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
            <a href="#">Impressum</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
          <li>
            <a href="#">Legal Guarantee</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <div className="SignInFooter__language-selector">
          <div className="SignInFooter__languages">
            <FaGlobe />
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
export default SignInFooter;
