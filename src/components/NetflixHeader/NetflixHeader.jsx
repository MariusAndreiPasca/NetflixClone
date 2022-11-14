import React, { useState, useEffect } from "react";
import "./NetflixHeader.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import axios from "../../axios";
import requests from "../../utils/requests";

const NetflixHeader = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <div className="NetflixHeader__container">
      <img
        className="NetflixHeader__background"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt=""
      />
      <div className="NetflixHeader__text">
        <h1 className="NetflixHeader__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h3 className="NetflixHeader__top">{movie.vote_average} Rating</h3>
        <h4 className="NetflixHeader__top">{movie.overview}</h4>
      </div>
      <div className="NetflixHeader__footer">
        <div className="NetflixHeader__buttons">
          <button className="NetflixHeader__playButton">
            <BsFillPlayFill className="buttonIconsOne" />
            Play
          </button>
          <button className="NetflixHeader__infoButton">
            <AiOutlineInfoCircle className="buttonIconsTwo" />
            More Info
          </button>
        </div>
        <div className="NetflixHeader__pg">16+</div>
      </div>
    </div>
  );
};

export default NetflixHeader;
