import React from "react";
import "./DownloadApp.css";
import phone from "../../assets/download.jpg";
import cover from "../../assets/cover.png";
import icon from "../../assets/download-icon.gif";

const DownloadApp = () => {
  return (
    <div className="DownloadApp__container">
      <div className="DownloadApp__wrapper">
        <div className="DownloadApp__text">
          <h1 className="DownloadApp__title">
            Download your shows to watch offline.
          </h1>
          <h2 className="DownloadApp__description">
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className="DownloadApp__demo">
          <div className="DownloadApp__image">
            <img className="DownloadApp__phone" src={phone} alt="phone image" />
            <div className="DownloadApp__animation">
              <div className="DownloadApp__tagLeft">
                <img
                  className="DownloadApp__cover"
                  src={cover}
                  alt="stranger things cover"
                />
                <div className="DownloadApp__movieTitle">
                  <h1 className="DownloadApp__movie">Strager Things</h1>
                  <h2 className="DownloadApp__para">Downloading...</h2>
                </div>
              </div>
              <img
                src={icon}
                className="DownloadApp__icon"
                alt="download icon"
                autoPlay
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
