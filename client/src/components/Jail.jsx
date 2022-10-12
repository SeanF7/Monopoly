import React from "react";

export default function Jail(props) {
  const [open, setOpen] = React.useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="corner jail" onClick={toggleClick}>
      <div className="jail-container">
        <div className="in-jail">
          <div className="in-jail-container">
            <h1>In</h1>
            <img className="jail-image" src="./src/assets/Jail.png" />
            <h1>Jail</h1>
          </div>
          <h1 id="just">Just</h1>
          <h1 id="visiting">Visiting</h1>
        </div>
      </div>
    </div>
  );
}
