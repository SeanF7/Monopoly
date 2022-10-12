import React, { useState } from "react";
import Helper from "../util/Helper.js";

export default function Chance_Community(props) {
  const [open, setOpen] = useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };
  let imgPath = "";
  let text = "";
  switch (props.img) {
    case "community-chest":
      imgPath = "./src/assets/Community-Chest.png";
      text = "Community Chest";
      break;
    case "chance":
      imgPath = "./src/assets/chance.png";
      text = "Chance";
  }

  const [classes, style] = Helper.positionCards(props.position);
  return (
    <div className={`card ${classes}`} onClick={toggleClick} style={style}>
      <h2 className="community-text">{text}</h2>
      <div className="price">
        <img className="community-chance" src={imgPath} />
        <p>{props.price}</p>
      </div>
    </div>
  );
}
