import React from "react";
import "./LogInFooter.css";
import { FaGlobe } from "react-icons/fa";

const LogInFooter = () => {
  return (
    <div className="LogInFooter__container">
      <div className="footerLogIn">
        <h3 className="LogInFooter__title">Questions? Call 0800-297-942</h3>
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
            <a href="#">Impressum</a>
          </li>
        </ul>
        <div className="LogInFooter__languages">
          <FaGlobe />
          <select name="languages" id="languages">
            <option value="english">English</option>
            <option value="deutsch">Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LogInFooter;
