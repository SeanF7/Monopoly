import React from "react";
import { MagnifiedProperty } from "../components/Property.jsx";

export default function PropertyPopup({ show, info }) {
  if (!show) {
    return <div></div>;
  }
  return (
    <div className="popup">
      <MagnifiedProperty
        name={info.title}
        color={info.color}
        price={info.price}
      />
    </div>
  );
}
