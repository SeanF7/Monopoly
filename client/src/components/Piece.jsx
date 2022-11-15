import React, { useState } from "react";
import io from "socket.io-client";
// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65
const socket = io.connect("http://192.168.206.108:3001");
socket.emit("join_room", "1");
function Piece() {
  const [imgwidth, setimgwidth] = useState(100);
  const [imgheight, setimgheight] = useState(200);
  async function handleClick() {
    let neww = Math.random() * 1000;
    let newh = Math.random() * 1000;
    const messageData = {
      room: "1",
      width: neww,
      height: newh,
    };
    setimgwidth(neww);
    setimgheight(newh);
    await socket.emit("button_clicked", messageData);
  }
  socket.on("recieve_click", (data) => {
    // This seems to occur more than it should if you make it console.log something
    setimgwidth(data.width);
    setimgheight(data.height);
  });

  return (
    <div>
      <img
        src="/src/assets/monopoly-icon.png"
        width={imgwidth}
        height={imgheight}
      ></img>
      <h1>{imgwidth}</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Piece;
