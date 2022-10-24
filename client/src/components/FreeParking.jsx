import React from "react";

export default function FreeParking(props) {
  return (
    <div
      className="corner parking"
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className="parking-container">
        <h1>Free</h1>
        <img className="car" src="./src/assets/freeparking.gif" />
        <h1>Parking</h1>
      </div>
    </div>
  );
}
