import React, { useState } from "react";
import "./ChoosePlan.css";
import { BsCheck2 } from "react-icons/bs";
import logo from "../../../assets/Netflix-Logo.wine.svg";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";

const ChoosePlan = () => {
  const [header, setHeader] = useState(false);
  const [plan, setPlan] = useState(true);

  const headerScroll = () => {
    if (window.scrollY >= 280) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const togglePlan = (index) => {
    if (plan === index) {
      return setPlan(null);
    }

    setPlan(index);
  };

  window.addEventListener("scroll", headerScroll);

  return (
    <div className="ChoosePlan__container">
      <nav className="ChoosePlan__nav">
        <div className="ChoosePlan__logo">
          <img className="NetLogo" src={logo} alt="netflix logo" />
        </div>
        <Link to="/signin" className="ChoosePlan__signOut">
          Sign Out
        </Link>
      </nav>

      <div className="ChoosePlan__main">
        <div className="ChoosePlan__text">
          <p className="ChoosePlan__step">
            STEP <strong>2</strong> OF <strong>3</strong>
          </p>
          <h1>Choose the plan that’s right for you</h1>
          <div className="ChoosePlan__benefits">
            <BsCheck2 className="tickImg" />
            <p>Watch all you want. Ad-free.</p>
          </div>
          <div className="ChoosePlan__benefits">
            <BsCheck2 className="tickImg" />
            <p>Recommendations just for you.</p>
          </div>
          <div className="ChoosePlan__benefits">
            <BsCheck2 className="tickImg" />
            <p>Change or cancel your plan anytime.</p>
          </div>
        </div>

        <div className="ChoosePlan__plan">
          <div
            className={
              header ? "ChoosePlan__header sticky" : "ChoosePlan__header"
            }
          >
            <div className="ChoosPlan__types">
              {offers.map((item, index) => (
                <div
                  className={
                    plan === index
                      ? "ChoosePlan__type activeButton"
                      : "ChoosePlan__type"
                  }
                  onClick={() => togglePlan(index)}
                >
                  {item.type}
                </div>
              ))}
            </div>
            <div className="ChoosePlan__arrows">
              {offers.map((item, index) => (
                <div
                  className={
                    plan === index
                      ? "ChoosePlan__arrow selectedPlan"
                      : "ChoosePlan__arrow"
                  }
                />
              ))}
            </div>
          </div>
          <table className="ChoosePlan__table">
            <div className="ChoosePlan__tableBody">
              <tr className="ChoosePlan_tableRow">
                <td className="ChoosePlan__tableColumn-title">Monthly price</td>
                <div className="ChoosePlan__options">
                  {offers.map((item, index) => (
                    <td
                      className={
                        plan === index
                          ? "ChoosePlan__tableColumn  activeGrid"
                          : "ChoosePlan__tableColumn"
                      }
                    >
                      {item.price}
                    </td>
                  ))}
                </div>
              </tr>
              <tr className="ChoosePlan_tableRow">
                <td className="ChoosePlan__tableColumn-title">Video quality</td>
                <div className="ChoosePlan__options">
                  {offers.map((item, index) => (
                    <td
                      className={
                        plan === index
                          ? "ChoosePlan__tableColumn  activeGrid"
                          : "ChoosePlan__tableColumn"
                      }
                    >
                      {item.quality}
                    </td>
                  ))}
                </div>
              </tr>
              <tr className="ChoosePlan_tableRow">
                <td className="ChoosePlan__tableColumn-title">Resolution</td>
                <div className="ChoosePlan__options">
                  {offers.map((item, index) => (
                    <td
                      className={
                        plan === index
                          ? "ChoosePlan__tableColumn  activeGrid"
                          : "ChoosePlan__tableColumn"
                      }
                    >
                      {item.resolution}
                    </td>
                  ))}
                </div>
              </tr>
              <tr className="ChoosePlan_tableRow noBorder">
                <td className="ChoosePlan__tableColumn-title">
                  Watch on your TV, computer, mobile phone and tablet
                </td>
                <div className="ChoosePlan__options">
                  {offers.map((item, index) => (
                    <BsCheck2
                      className={
                        plan === index
                          ? "ChoosePlan__tick activeGrid"
                          : "ChoosePlan__tick"
                      }
                    />
                  ))}
                </div>
              </tr>
            </div>
          </table>
        </div>

        <div className="ChoosePlan__description">
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our{" "}
            <Link className="ChoosePlan__terms">Terms of Use</Link> for more
            details.
          </p>
          <p>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard and
            1 with Basic.
          </p>
        </div>

        <div className="ChoosePlan__button">
          <button className="ChoosePlan__links" type="submit">
            <Link className="SignIn__logIn-link" to="/payment">
              Next
            </Link>
          </button>
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

const offers = [
  {
    type: "Basic",
    price: "€7,99",
    quality: "Good",
    resolution: "480p",
  },
  {
    type: "Standard",
    price: "€12,99",
    quality: "Better",
    resolution: "1080p",
  },
  {
    type: "Premium",
    price: "€17,99",
    quality: "Best",
    resolution: "4K+HDR",
  },
];

export default ChoosePlan;
