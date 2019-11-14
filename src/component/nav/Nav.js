import React from "react";
import SVG from "react-svg";
import NavLink from "./NavLink";

import search from "../../assets/icons/search.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-links">
        <NavLink base="design" label="Design" />
        <NavLink base="dimensions" label="Dimensions" />
        <NavLink base="facts" label="Facts & figures" />
        <NavLink base="history" label="EVO History" />
        <NavLink base="reviews" label="Reviews" />
      </div>

      <div className="nav-search">
        <SVG src={search} className="nav-search-icon" />

        <input className="nav-search-input" placeholder="Search for details" />
      </div>
    </nav>
  );
}

export default Nav;
