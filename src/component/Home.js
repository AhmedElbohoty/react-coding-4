import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Nav from "./nav/Nav";
import Main from "./main/Main";

import background from "../assets/images/background.png";

function Home() {
  return (
    <section id="l-home">
      <div className="home-background-container">
        <img
          style={{ transform: ((60 * window.innerWidth) / 100) * -1 }}
          className="home-background"
          src={background}
          alt="Red car on the road"
        />
      </div>

      {/* Gradients for background */}
      <div className="home-overlay-top"></div>
      <div className="home-overlay-side"></div>

      <main id="l-main">
        <Sidebar />
        <div id="l-submain">
          <Nav />
          <Main />
        </div>
      </main>
    </section>
  );
}

export default Home;
