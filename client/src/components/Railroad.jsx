import React from "react";
import Helper from "../util/Helper.js";

export default function Railroad(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  const [classes, style] = Helper.positionCards(props.position);
  return (
    <div className={`card ${classes}`} onClick={toggleClick} style={style}>
      <h2 className="railroad-name">{props.name}</h2>
      <img className="train-svg" src="./src/assets/ChooChoo.svg" />
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
