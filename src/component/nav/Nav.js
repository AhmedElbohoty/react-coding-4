import React, { useState } from "react";
import SVG from "react-svg";
import NavLink from "./NavLink";

import search from "../../assets/icons/search.svg";

function Nav() {
  const [focus, setFocus] = useState(false);

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
        <SVG
          src={search}
          className={`nav-search-icon ${focus && "nav-search-icon-focus"}`}
        />

        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="nav-search-input"
          placeholder="Search for details"
        />
      </div>
    </nav>
  );
}

export default Nav;
