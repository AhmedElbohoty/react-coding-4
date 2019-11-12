import React from "react";
import Sidebar from "./Sidebar";

import background from "../assets/images/background.png";

function Home() {
  return (
    <section id="l-home">
      <div className="home-background-container">
        {/* <img
          className="home-background"
          src={background}
          alt="Red car on the road"
        /> */}
      </div>

      {/* Gradients for background */}
      <div className="home-overlay-top"></div>
      <div className="home-overlay-side"></div>

      <Sidebar />
    </section>
  );
}

export default Home;
