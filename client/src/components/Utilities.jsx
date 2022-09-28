import React from "react";

export default function Utilities_Tax(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  let imgPath = "";
  let text = "";
  switch (props.utility) {
    case "electric":
      imgPath = "./src/assets/Electric.png";
      text = "Electric Company";
      break;
    case "water":
      imgPath = "./src/assets/Water.png";
      text = "Water Works";
  }
  return (
    <div className="card" onClick={toggleClick}>
      <h2>{text}</h2>
      <img className={props.utility} src={imgPath} />
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
