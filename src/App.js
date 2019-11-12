import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/modules/home.css";
import "./styles/modules/sidebar.css";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Route exact path="/" component={Home} />
      </section>
    </BrowserRouter>
  );
}

export default App;
