import React from "react";

export default function PropertyPopup({ show }) {
  if (!show) {
    return <div></div>;
  }
  return (
    <div className="popup">
      <div>Info</div>
    </div>
  );
}
