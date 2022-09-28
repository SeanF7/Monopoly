import React from "react";

export default function FreeParking(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="corner parking" onClick={toggleClick}>
      <div className="parking-container">
        <h1>Free</h1>
        <img className="car" src="./src/assets/freeparking.gif" />
        <h1>Parking</h1>
      </div>
    </div>
  );
}
