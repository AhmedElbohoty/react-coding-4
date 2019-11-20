import React from "react";

function MainPattern() {
  function renderPatternOval() {
    const elements = [];

    for (let i = 0; i < 140; i++) {
      elements.push(<span key={i} className="main-pattern-oval"></span>);
    }

    return elements;
  }

  return <div className="main-pattern">{renderPatternOval()}</div>;
}

export default MainPattern;
