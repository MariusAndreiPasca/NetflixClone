import React from "react";
import "./MovieBox.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ poster_path }) => {
  return (
    <div className="MovieBox__container">
      <img src={API_IMG + poster_path} alt="movies posters" />
    </div>
  );
};

export default MovieBox;
