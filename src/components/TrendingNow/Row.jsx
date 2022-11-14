import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../../axios";
import { motion } from "framer-motion";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [width, setWidth] = useState();
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="Row__container">
      <h2 className="Row__title">{title}</h2>

      <motion.div ref={carousel} className="Row__carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="Row__inner-carousel"
        >
          {movies.map((movie) => (
            <motion.div
              className={`Row__poster ${isLargeRow && "Row__largePoster"}`}
            >
              <img
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Row;
