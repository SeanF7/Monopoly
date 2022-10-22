import React from "react";
import Helper from "../util/Helper.js";

export default function Property(props) {
  let [classes, style] = Helper.positionCards(props.position);
  return (
    <div
      className="card-holder"
      style={style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className={`card ${classes}`}>
        <div className={`header ${props.color}`} />
        <p className="property-name">{props.name}</p>
        <div className="price">
          <img
            className="monopoly-symbol"
            src="./src/assets/MonopolySymbol.svg"
          />
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export function MagnifiedProperty(props) {
  return (
    <div className="card-holder">
      <div className={`card`}>
        <div className={`header ${props.color}`} />
        <p className="property-name">{props.name}</p>
        <div className="price">
          <img
            className="monopoly-symbol"
            src="./src/assets/MonopolySymbol.svg"
          />
          <p>{props.price}</p>
        </div>
      </div>
    </div>
  );
}
