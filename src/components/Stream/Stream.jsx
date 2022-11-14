import React from "react";
import "./Stream.css";
import video from "../../assets/video.mp4";
import frame from "../../assets/frame.png";

const Stream = () => {
  return (
    <div className="Stream__container">
      <div className="Stream__wrapper">
        <div className="Stream__title">
          <h1 className="Stream__heading">Watch everywhere.</h1>
          <h2 className="Stream__para">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div className="Stream__animation">
          <div className="Stream__animation-container">
            <img className="Stream__image" src={frame} alt="tv image" />
            <div className="Stream__video">
              <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
