import React from "react";
import SVG from "react-svg";

import bookmark from "../../assets/icons/bookmark.svg";
import play from "../../assets/icons/play.svg";

export default function MainActions() {
  return (
    <section className="main-actions">
      <div className="main-action">
        <div className="main-action-icon main-action-play">
          <SVG className="ma-play-svg" src={play} />
        </div>
        <p className="main-action-label">Watch film</p>
      </div>
      <div className="main-action">
        <div className="main-action-icon main-action-bookmark">
          <div className="main-action-overlay"></div>
          <SVG className="ma-bookmark-svg" src={bookmark} />
        </div>
        <p className="main-action-label">Bookmark for later</p>
      </div>
    </section>
  );
}
