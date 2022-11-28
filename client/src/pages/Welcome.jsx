import React from "react";

export default function Welcome() {
  return (
    /*
    list of requirements for welcome page:
    1. title of game
    2. photo of game (need a better image than what is currently uploaded)
    3. play with friends
    4. link to official rules
    5. credits page
    */
    <main className="welcome">
      <h1>Monopoly</h1>
      <img src="src/assets/monopoly-icon.png" width="80%" height="80%"></img>
      <br></br>
      <div className="session-buttons">
        <a href="/create">Create a Session</a>
        <a href="/join">Join a Session</a>
      </div>
      <button>New to the game? View the official rules here! </button>
    </main>
  );
}

/*
Create a session -> share link or code

Join a session -> enter code

Game view -> monopoly board. this will be based on the game logic

game logic - 3 people

chat - 1 person
live join feature - 1 person
frontend - 1 person
aws deployment - 1 person?

*/
