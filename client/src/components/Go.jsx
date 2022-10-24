import React from "react";

export default function Go(props) {
  return (
    <div
      className="corner go"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className="go-container">
        <h1 className="collect">
          Collect <br />
          <img
            className="monopoly-symbol"
            src="./src/assets/MonopolySymbol.svg"
          />
          200 Salary <br />
          as you pass
        </h1>
        <h1 className="go-text">Go</h1>
      </div>
      <img className="arrow" src="./src/assets/arrow.png" />
    </div>
  );
}
