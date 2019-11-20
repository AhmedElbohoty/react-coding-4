import React from "react";
import MainPattern from "./MainPattern";
import MainActions from "./MainActions";
import MainCarDetaills from "./MainCarDetaills";

function Main() {
  return (
    <main className="main">
      <MainPattern />

      <div className="main-content">
        <h1 className="main-h1">
          <p>Mitsubishi </p>
          <p>Lancer</p>
          <p>Evolution</p>
        </h1>

        <MainActions />
        <MainCarDetaills />
      </div>
    </main>
  );
}

export default Main;
