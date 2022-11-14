import React, { useState } from "react";
import "./NetflixNavbar.css";
import logo from "../../assets/Netflix-Logo.wine.svg";
import { FaSearch, FaBell } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";
import avatar from "../../assets/avatar1.png";

const NetflixNavbar = () => {
  const [open, setOpen] = useState(false);

  const openHandle = () => {
    setOpen(!open);
  };

  const [sticky, setSticky] = useState(false);

  const scrollNav = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", scrollNav);

  const categories = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  return (
    <div
      className={
        sticky
          ? "NetflixNavbar__container stickyNavbar"
          : "NetflixNavbar__container"
      }
    >
      <div className="NetflixNavbar__logo">
        <img src={logo} alt="" />
      </div>
      <ul className="NetflixNavbar__links">
        {categories.map((item) => (
          <li key={item} className="NetflixNavbar__link">
            {item}
          </li>
        ))}
      </ul>
      <div className="NetflixNavbar__profile">
        <div className="NetflixNavbar__searchBar">
          <div className="NetflixNavbar__searchBar-box">
            <input
              type="search"
              className={
                open
                  ? "NetflixNavbar__searchInput openSearch"
                  : "NetflixNavbar__searchInput"
              }
              placeholder="Titles, persons, geners"
            />
            <button
              className={
                open ? "NetflixNavbar__icon openIcon" : "NetflixNavbar__icon"
              }
              onClick={openHandle}
            >
              <FaSearch className="openIcon" />
            </button>
          </div>
        </div>
        <p className="NetflixNavbar__kids">Kids</p>
        <FaBell className="NetflixNavbar__notification" />
        <div className="NetflixNavbar__profile-options">
          <img src={avatar} alt="" />
          <RiArrowDownSFill className="NetflixNavbar__arrow" />
        </div>
      </div>
    </div>
  );
};

export default NetflixNavbar;
