import React from "react";

export default function GoToJail(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="corner go-to-jail" onClick={toggleClick}>
      <div className="go-to-jail-container">
        <h1>Go To</h1>
        <img className="cop" src="./src/assets/Cop.png" />
        <h1>Jail</h1>
      </div>
    </div>
  );
}
