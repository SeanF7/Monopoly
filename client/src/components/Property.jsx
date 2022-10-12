import React from "react";
import Helper from "../util/Helper.js";
import PropertyPopup from "./PropertyPopup.jsx";

export default function Property(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };

  const [classes, style] = Helper.positionCards(props.position);
  // Have to figure out way to get the popup outside of the grid
  return (
    <div className="card-holder" style={style}>
      <div className={`card ${classes}`} onClick={toggleClick}>
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
      <PropertyPopup show={open} />
    </div>
  );
}
