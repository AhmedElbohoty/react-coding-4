import React from "react";
import SVG from "react-svg";
import MenuIcon from "./MenuIcon";

import down_arrow from "../../assets/icons/down_arrow.svg";

function Sidebar() {
  return (
    <section className="sidebar">
      <MenuIcon />
      <div className="sidebar-scroll-container">
        <p className="sidebar-scroll">Scroll down</p>
        <SVG src={down_arrow} className="sidebar-scroll-arrow" />
      </div>
    </section>
  );
}

export default Sidebar;
