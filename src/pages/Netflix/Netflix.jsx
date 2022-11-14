import React from "react";
import NetflixHeader from "../../components/NetflixHeader/NetflixHeader";
import NetflixNavbar from "../../components/NetflixNavbar/NetflixNavbar";
import "./Netflix.css";
import requests from "../../utils/requests";
import Row from "../../components/TrendingNow/Row";

const Netflix = () => {
  return (
    <div className="Netflix__container">
      <NetflixNavbar />
      <NetflixHeader />
      <div className="Netflix__rows">
        <Row
          title="Recently Added"
          isLargeRow={true}
          fetchUrl={requests.fetchTrending}
        />
        <Row
          title="Popular on Netflix"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
};

export default Netflix;
