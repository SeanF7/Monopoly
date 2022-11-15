import React from "react";
import Helper from "../util/Helper.js";

export default function Utilities_Tax(props) {
  let imgPath = "";
  let utility = "";
  switch (props.name) {
    case "ELECTRIC COMPANY":
      imgPath = "./src/assets/Electric.png";
      utility = "electric";
      break;
    case "WATER WORKS":
      imgPath = "./src/assets/Water.png";
      utility = "water";
  }
  const [classes, style] = Helper.positionCards(props.position);
  return (
    <div
      className={`card ${classes}`}
      style={style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <h2>{props.name}</h2>
      <img className={utility} src={imgPath} />
      <div className="price">
        <img
          className="monopoly-symbol"
          src="./src/assets/MonopolySymbol.svg"
        />
        <p>{props.price}</p>
      </div>
    </div>
  );
}
