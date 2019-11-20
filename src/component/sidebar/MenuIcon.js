import React from "react";

function MenuIcon() {
  function renderSquares() {
    const elements = [];

    for (let i = 0; i < 9; i++) {
      elements.push(<span key={i} className="sidebar-menu-square"></span>);
    }

    return elements;
  }

  return <div className="sidebar-menu-icon">{renderSquares()}</div>;
}

export default MenuIcon;
