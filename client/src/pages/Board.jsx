import React from "react";
import Property from "../components/Property.jsx";
import data from "../assets/properties.json";
import Railroad from "../components/Railroad.jsx";
import GoToJail from "../components/GoToJail.jsx";
import Go from "../components/Go.jsx";
import Jail from "../components/Jail.jsx";
import FreeParking from "../components/FreeParking.jsx";
import Chance_Community from "../components/Chance-Community.jsx";
import Tax from "../components/Tax.jsx";
import Utility from "../components/Utilities.jsx";
import BoardCenter from "../components/BoardCenter.jsx";

export default function Board(props) {
  let order = new Map();
  let houses = [];
  let trainstations = [];
  let utilities = [];
  let others = [];
  data.map((data) => {
    houses = data.properties;
    trainstations = data.trainstations;
    utilities = data.utilities;
    others = data.other;
  });
  houses.forEach((house) => {
    order.set(house.position, house);
  });

  trainstations.forEach((train) => {
    order.set(train.position, train);
  });

  utilities.forEach((utility) => {
    order.set(utility.position, utility);
  });

  others.forEach((other) => {
    order.set(other.position, other);
  });

  for (let i = 0; i <= order.size; i++) {
    console.log(order.get(i));
  }
  return (
    <div className="board">
      {houses.map(function (item) {
        return (
          <Property
            name={item.title}
            color={item.color}
            price={item.price}
            key={item.position}
          />
        );
      })}
      <BoardCenter />
      <Railroad name="Reading Railroad" price="200" />
      <Railroad name="Short Line" price="200" />
      <GoToJail />
      <Go />
      <Jail />
      <FreeParking />
      <Chance_Community img="community-chest" />
      <Chance_Community img="chance" />
      <Tax tax="income" price="200" />
      <Tax tax="luxury" price="100" />
      <Utility utility="electric" price="150" />
      <Utility utility="water" price="150" />
    </div>
  );
}
