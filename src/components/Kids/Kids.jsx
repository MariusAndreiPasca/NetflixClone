import React from "react";
import "./Kids.css";
import kid from "../../assets/kid.png";

const Kids = () => {
  return (
    <div className="Kids__container">
      <div className="Kids__wrapper">
        <div className="Kids__text">
          <h1 className="Kids__title">Create profiles for kids.</h1>
          <p className="Kids__para">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="Kids__image">
          <img src={kid} alt="kids profile" />
        </div>
      </div>
    </div>
  );
};

export default Kids;
