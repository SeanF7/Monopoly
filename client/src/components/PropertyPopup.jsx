import React from "react";

export default function PropertyPopup({ show, info }) {
  if (!show) {
    return <div></div>;
  }
  return (
    <div className="popup">
      {console.log("hello")}
      <div>{JSON.stringify(info)}</div>
    </div>
  );
}
