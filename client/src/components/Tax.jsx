import React from "react";

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
  return (
    <div className="card" onClick={toggleClick}>
      <h2>{text}</h2>
      <img className={props.tax} src={imgPath} />
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
