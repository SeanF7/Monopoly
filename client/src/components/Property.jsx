import React from "react";

export default function Property(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  let classes = "";
  console.log(props.position);
  if (props.position > 27) {
    classes = "right";
  } else if (props.position > 18) {
    classes = "top";
  } else if (props.position > 9) {
    classes = "left";
  }

  let style = {};
  if (props.position - 22 > 0 && props.position - 33 < 0) {
    style = { gridColumnStart: (props.position - 22) % 11, gridRowStart: 0 };
  }
  console.log(style);
  return (
    <div className={`card ${classes}`} onClick={toggleClick} style={style}>
      <div className={`header ${props.color}`} />
      <h2 className="property-name">{props.name}</h2>
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
