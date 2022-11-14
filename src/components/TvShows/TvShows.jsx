import React, { useEffect, useState, useRef } from "react";
import "./TvShows.css";
import { motion } from "framer-motion";
import MovieBox from "../MovieBox/MovieBox";

const API_URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=5807e7718ab8da030534bdcbcff73fb4";

const TvShows = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="Action__container">
      <h3 className="Slider__title">Tv Shows</h3>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TvShows;
