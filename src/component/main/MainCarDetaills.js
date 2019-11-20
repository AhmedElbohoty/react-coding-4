import React from "react";
import SVG from "react-svg";

import star from "../../assets/icons/star.svg";
import star_inactive from "../../assets/icons/star_inactive.svg";

function MainCarDetaills() {
  return (
    <section className="main-details">
      <div className="main-detail">
        <p className="main-detail-label">Manufacturer</p>
        <p className="main-detail-value">Mitsubishi Motors</p>
      </div>

      <div className="main-detail">
        <p className="main-detail-label">Production</p>
        <p className="main-detail-value">1992-2016</p>
      </div>

      <div className="main-detail">
        <p className="main-detail-label">Engine</p>
        <p className="main-detail-value">2.0 L I4 turbo</p>
      </div>

      <div className="main-detail main-detail-review">
        <p className="main-detail-label">Review</p>
        <div className="main-rate">
          <SVG className="main-rate-star" src={star} />
          <SVG className="main-rate-star" src={star} />
          <SVG className="main-rate-star" src={star} />
          <SVG className="main-rate-star" src={star} />
          <SVG className="main-rate-star" src={star_inactive} />

          <p className="main-rate-value">4.2/5</p>
        </div>
      </div>
    </section>
  );
}

export default MainCarDetaills;
