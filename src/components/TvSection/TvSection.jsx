import React from "react";
import "./TvSection.css";
import tv from "../../assets/tv.png";
import promoVideo from "../../assets/tv.mp4";

const TvSection = () => {
  return (
    <div className="TvSection__container">
      <div className="TvSection__wrapper">
        <div className="TvSection__title">
          <h1 className="TvSection__heading">Enjoy on your TV.</h1>
          <p className="TvSection__para">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="TvSection__animation">
          <div className="TvSection__videoWrapper">
            <video
              src={promoVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
            ></video>
          </div>
          <div className="TvSection__image">
            <img src={tv} alt="tv image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvSection;
