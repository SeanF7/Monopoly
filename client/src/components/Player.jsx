// Player Main Function
class NewPlayer {
  // Constructs a new player object, const playerOne = new NewPlayer(1, 'John');
  constructor(pId, name) {
    // requires an id (use for play order), and name (what will be displayed)
    this.playerId = pId;
    this.name = name;
    this.money = 1500;
    this.location = 0;
    this.jailTime = 0;
    this.doubleCount = 0;
    this.jailCards = 0;
    this.rollAgain = false;
    this.dice = new Dice();

    this.goTo = function (location) {
      // This directly changes the position of the player playerOne.goTo(7);
      if (!(location > 40)) {
        this.location = location;
      } else {
        console.log("location > 40, out of bounds, player not moved.");
      }
    };

    this.move = function (distance) {
      // This changes the position, based on the input number and current position playerOne.move(7);
      console.log("Moving");
      this.location += distance;
      if (this.location > 39) {
        this.location -= 40;
        this.money += 200;
        console.log("You passed go + $200");
      }
    };

    this.roll = function () {
      // Rolls the dice for this player, and moves accordingly playerOne.roll();
      this.dice.roll();
      console.log(this.dice.total);
      this.move(this.dice.total);
    };
  }
}

class Dice {
  // Constructs new Dice object dice = new Dice();
  constructor() {
    this.dieA = 0;
    this.dieB = 0;
    this.wasDouble = false;
    this.total = 0;
    this.roll = function () {
      // This randomizes the numbers and creates all needed data dice.roll(); this.dieA = Math.ceil(Math.random() * 6);
      this.dieB = Math.ceil(Math.random() * 6);
      this.total = this.dieA + this.dieB;
      this.wasDouble = false;
      if (this.dieA == this.dieB) {
        this.wasDouble = true;
      }
    };
  }
}

const playerOne = new NewPlayer(1, "Bunger");
console.log(playerOne.location);
playerOne.roll();
