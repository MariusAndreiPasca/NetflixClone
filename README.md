API_URL="https://api.themoviedb.org/3/movie/popular?api_key=5807e7718ab8da030534bdcbcff73fb4"
API_IMG="https://image.tmdb.org/t/p/original/"
API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=5807e7718ab8da030534bdcbcff73fb4&query"

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

     <h3 className="Slider__title">Recently Added</h3>
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

.Row\_\_container {
display: flex;
flex-direction: column;
padding-left: 30px;
z-index: 5;
margin-bottom: 10px;
gap: 10px;
margin-left: 30px;
}

.Row\_\_title {
color: #fff;
}

.Row\_\_posters {
display: flex;
overflow: hidden;
width: 100%;
}

.Row\_\_posters::-webkit-scrollbar {
display: none;
}

.Row\_\_poster {
object-fit: contain;
max-width: 200px;
margin-right: 10px;
border-radius: 4px;
}

.Row\_\_largePoster {
max-width: 250px;
max-height: 250px;
}
