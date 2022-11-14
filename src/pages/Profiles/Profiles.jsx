import React from "react";
import "./Profiles.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.jpg";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <div className="Profiles__container">
      <h1 className="Profiles__title">Choose a profile</h1>
      <div className="Profiles__cards">
        <div className="Profiles__card">
          <img src={avatar1} alt="" />
          <p className="Profiles__name">
            <Link to="/netflix">Click Me</Link>
          </p>
        </div>
        <div className="Profiles__card">
          <img src={avatar2} alt="" />
          <p className="Profiles__name">User2</p>
        </div>
        <div className="Profiles__card">
          <img src={avatar3} alt="" />
          <p className="Profiles__name">User3</p>
        </div>
        <div className="Profiles__card">
          <img src={avatar4} alt="" />
          <p className="Profiles__name">Kids</p>
        </div>
        <div className="Profiles__card">
          <div className="Profiles__addProfile">
            <BiPlusMedical className="Profiles__icon" />
          </div>
          <p className="Profiles__name">Add Profile</p>
        </div>
      </div>
      <div className="Profiles__manage">
        <button className="Profiles__button">MANAGE PROFILES</button>
      </div>
    </div>
  );
};

export default Profiles;
