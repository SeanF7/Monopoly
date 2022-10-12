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
  return (
    <div className="board">
      {houses.map(function (item) {
        return (
          <Property
            name={item.title}
            color={item.color}
            price={item.price}
            key={item.position}
            position={item.position}
          />
        );
      })}
      {trainstations.map(function (station) {
        return (
          <Railroad
            name={station.title}
            price={station.price}
            key={station.position}
            position={station.position}
          />
        );
      })}
      {others.community.positions.map(function (pos) {
        return (
          <Chance_Community
            img="community-chest"
            position={pos}
            name={others.community.title}
          />
        );
      })}
      {others.chance.positions.map(function (pos) {
        return (
          <Chance_Community
            img="chance"
            position={pos}
            name={others.chance.title}
          />
        );
      })}
      <GoToJail position={others.go_to_jail.position} />
      <Go position={others.go.position} />
      <Jail position={others.jail.position} />
      <FreeParking position={others.parking.position} />
      {others.taxes.map(function (tax) {
        return (
          <Tax
            tax={tax.type}
            position={tax.position}
            name={tax.name}
            price={tax.price}
          />
        );
      })}
      {utilities.map(function (utility) {
        return (
          <Utility
            utility={utility.type}
            position={utility.position}
            price={utility.price}
          />
        );
      })}
      <BoardCenter />
    </div>
  );
}
