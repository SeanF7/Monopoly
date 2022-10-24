import React, { useState } from "react";
import Helper from "../util/Helper.js";

export default function Chance_Community(props) {
  let imgPath = "";
  let text = "";
  let classes;
  let style;
  switch (props.img) {
    case "community":
      imgPath = "./src/assets/Community-Chest.png";
      text = "COMMUNITY CHEST";
      break;
    case "chance":
      imgPath = "./src/assets/chance.png";
      text = "CHANCE";
  }
  if (props.dontStyle) {
  } else {
    [classes, style] = Helper.positionCards(props.position);
  }
  return (
    <div
      className={`card ${classes}`}
      style={style}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <h2 className="community-text">{text}</h2>
      <div className="price">
        <img className="community-chance" src={imgPath} />
        <p>{props.price}</p>
      </div>
    </div>
  );
}
