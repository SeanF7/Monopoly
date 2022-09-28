import React from "react";

export default function Property(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="card" onClick={toggleClick}>
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
