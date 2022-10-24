import React from "react";
import Property from "../components/Property.jsx";
import Railroad from "../components/Railroad.jsx";
import Chance_Community from "../components/Chance-Community.jsx";
import Utility from "../components/Utilities.jsx";
import GoToJail from "../components/GoToJail.jsx";
import Tax from "../components/Tax.jsx";
import Go from "../components/Go.jsx";
import Jail from "../components/Jail.jsx";
import FreeParking from "../components/FreeParking.jsx";

export default function PropertyPopup({ show, info }) {
  if (!show) {
    return <div></div>;
  }
  if (info.type == "property") {
    return (
      <div className="popup">
        <Property
          name={info.title}
          color={info.color}
          price={info.price}
          dontStyle={true}
        />
      </div>
    );
  } else if (info.type == "railroad") {
    return (
      <div className="popup">
        <Railroad name={info.title} price={info.price} dontStyle={true} />
      </div>
    );
  } else if (info.type == "chance" || info.type == "community") {
    return (
      <div className="popup">
        <Chance_Community img={info.type} name={info.title} dontStyle={true} />
      </div>
    );
  } else if (info.type == "utility") {
    return (
      <div className="popup">
        <Utility
          name={info.name}
          position={info.position}
          price={info.price}
          dontStyle={true}
        />
      </div>
    );
  } else if (info.type == "luxury" || info.type == "income") {
    return (
      <div className="popup">
        <Tax
          tax={info.type}
          name={info.name}
          price={info.price}
          dontStyle={true}
        />
      </div>
    );
  } else if (info.type == "go") {
    return (
      <div className="popup-corner">
        <Go dontStyle={true} />
      </div>
    );
  } else if (info.type == "jail") {
    return (
      <div className="popup-corner">
        <Jail dontStyle={true} />
      </div>
    );
  } else if (info.type == "go-to-jail") {
    return (
      <div className="popup-corner">
        <GoToJail dontStyle={true} />
      </div>
    );
  } else if (info.type == "parking") {
    return (
      <div className="popup-corner">
        <FreeParking dontStyle={true} />
      </div>
    );
  }
}
