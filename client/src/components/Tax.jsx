import React from "react";
import Helper from "../util/Helper.js";

export default function Utilities_Tax(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  let imgPath = "";
  let text = "";
  switch (props.tax) {
    case "income":
      imgPath = "./src/assets/income.svg";
      text = "Income Tax";
      break;
    case "luxury":
      imgPath = "./src/assets/luxury.png";
      text = "Luxury Tax";
  }

  const [classes, style] = Helper.positionCards(props.position);

  return (
    <div className={`card ${classes}`} onClick={toggleClick} style={style}>
      <h2>{text}</h2>
      <img className={props.tax} src={imgPath} />
      <div className="price">
        <p id="pay">PAY</p>
        <img
          className="monopoly-symbol"
          src="./src/assets/MonopolySymbol.svg"
        />
        <p>{props.price}</p>
      </div>
    </div>
  );
}
