import React from "react";
import "../css/navbar.css";
import Button from "../buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__navbar-left">
          <h2 className="navbar__navbar-left__logo">AY TUBE</h2>
        </div>
        <div className="navbar__navbar-middle">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            className="navbar__navbar-middle__search"
            type="text"
            name="text"
          />
        </div>
        <div className="navbar__navbar-right">
          <p className="navbar__navbar-right__item">Home</p>
          <p className="navbar__navbar-right__item">Favorites</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
