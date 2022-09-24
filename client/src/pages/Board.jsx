import React from "react";
import Property from "../components/Property.jsx"
import data from "../assets/properties.json"

export default function Board(props) {
  let houses = [];
  const newdata = data.map((data) =>{
    houses = data.properties
  })
    return (
      <div className="board">
        {houses.map(function(item) {
          return <Property name={item.title} color={item.color} price={item.price} key={item}/>;
        })}
      </div>
    )
}