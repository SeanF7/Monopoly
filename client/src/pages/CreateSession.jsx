import React from "react";

export default function CreateSession() {
  return (
    <main className="welcome">
      <h1 className="center">Monopoly</h1>
      <img
        src="src/assets/monopoly-icon.png"
        width="auto"
        height="auto"
        className="center"
      ></img>
      <br></br>
      <div>
        <label for="session-id">Session ID:</label>
        <input name="session-id"></input>
      </div>
    </main>
  );
}
