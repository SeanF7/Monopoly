//Required constant values
    //Rule: 0 = non-action | 1 = property | 2 = community chest | 3 = contingency | 4 = action | 5 = jail
    //This table helps player identify what it should do when it is on / has landed on a tile
const locationType = [0,1,2,1,4,1,1,3,1,1,
                      0,1,1,1,1,1,1,2,1,1,
                      0,1,3,1,1,1,1,1,1,1,
                      4,1,1,2,1,1,3,1,4,1,5];

let properties = [0,0,0,0,0,0,0,0,0,0,    //If a property is owned, the number will change corresponding to the player
                  0,0,0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,0,0,
                  0,0,0,0,0,0,0,0,0,0,0];
let rentValues = [0,2,0,4,0,0,6,0,6,8,          //If a property is owned, the number will change corresponding to the player
                  0,10,0,10,12,0,14,0,14,16,    //THIS IS BASE VALUE, HOUSES NOT IMPLEMENTED
                  0,18,0,18,20,0,22,22,0,24,
                  0,26,26,0,28,0,0,35,0,50,0];

class Game {
    constructor() {
        this.playerOrder = [];
        this.playerCount = 0;
        this.currentPlayer = 0;

        this.addPlayer = function(newName) {   //adds a new player to the game, sets their id to playerCount, and name to the input.
            playerOrder[this.playerCount] = NewPlayer(this.playerCount, newName);
            this.playerCount += 1;
        };

        this.nextPlayer = function() {   //ADD FUNCTIONALITY WHICH ROLLS PLAYER DICE AND TAKE NECESSARY ACTIONS

            currentPlayer += 1;
            if(this.currentPlayer == this.playerCount) {
                this.currentPlayer = 0;
            }
        };

        this.playerRoll = function() {
            this.playerOrder[this.currentPlayer].roll;
            if(properties[this.playerOrder[this.currentPlayer].location] != this.currentPlayer) {
                if(properties[this.playerOrder[this.currentPlayer].location] != 0) {
                    this.playerOrder[properties[this.playerOrder[this.currentPlayer].location]].money += rentValues[this.playerOrder[this.currentPlayer].location];
                };
            };
        };
    }
}

//Player Main Function
class NewPlayer {                  //Constructs a new player object,    const playerOne = new NewPlayer(1, 'John');
    constructor(pId, name) {       //requires an id (use for play order), and name (what will be displayed)
        this.playerId = pId;
        this.name = name;
        this.money = 1500;
        this.location = 0;
        this.jailTime = 0;
        this.doubleCount = 0;
        this.jailCards = 0;
        this.rollAgain = false;
        this.dice = new Dice();
        this.canBuy = false();

        this.goTo = function(location) {    //This directly changes the position of the player     playerOne.goTo(7);
            if(!(location > 40)) {
                this.location = location;
            } else {
                console.log("location > 40, out of bounds, player not moved.");
            }
        };

        this.move = function (distance) {  //This changes the position, based on the input number and current position    playerOne.move(7);
            console.log('Moving');
            this.location += distance;
            if(this.location > 39) {
                this.location -=40;
                this.money += 200;
                console.log("You passed go + $200");
            }
            this.action();
        };

        this.roll = function() {          //Rolls the dice for this player, and moves accordingly        playerOne.roll();
            this.dice.roll();
            console.log(this.dice.total);
            this.move(this.dice.total);
        };

        this.action = function() {        //Determines the action needed to be taken on the current tile
            switch(locationType[this.location]) {
                case 0: //non-action tile
                        //safe
                    break;
                case 1: //property tile
                    if(properties[this.location] == 0) {
                        this.canBuy = true;                //This variable should trigger a window to confirm buying the property
                    } else{
                        if(properties[this.location] != this.pId) {
                            this.money -= rentValues[this.location];    //NEEDS TO ADD MONEY BACK TO THE RECIPIENT PLAYER
                        } 
                    }
                    break;
                case 2: //community chest
                    CommunityChest.drawCard();
                    this.cardAction(CommunityChest.selector, 0);
                    break;
                case 3: //contingency
                    Chance.drawCard();
                    this.cardAction(Chance.selector, 1);
                    break;
                case 4: //special action
                    if(this.location == 4) { //income tax
                        this.money -= 200;
                    };
                    if(this.location == 38) { //luxury tax
                        this.money -= 100;
                    };
                    if(this.location == 30) { //go to jail
                        this.goTo(40);
                    };
                    break;
                case 5: //jail

                    break;
                default:
                    console.log("Something went wrong.");
            };
        };

        this.cardAction = function(cardNumber, deck) {                  //Card actions
            if(deck == 0) {             //Community Chest
                switch(cardNumber) {
                    case 0: //moves the player

                        break;
                    case 1,2,3,6,7,8,9,10,11,12,13,14,15: //edits money

                        break;
                    case 4: //get out of jail
                        this.jailCards + 1
                        break;
                    case 5: //go to jail

                        break;
                    default:
                        console.log("Something went wrong in cardAction Community Chest");
                }
            }else if(deck == 1) {       //Chance
                switch(cardNumber) {
                    case 0,1,2,3,4,5,6,9,13: //moves the player

                        break;
                    case 7,11,12,14,15: //edits money

                        break;
                    case 8: //get out of jail
                        this.jailCards + 1
                        break;
                    case 10: //go to jail

                        break;
                    default:
                        console.log("Something went wrong in cardAction Chance");
                }
            }else {
                console.log("no deck with id: " + deck);
            }
        };

        this.buyProperty = function(confirm) {       //Buy the property the player is currently standing on
            if(this.canBuy){                         //confirm is a confirm / deny the purchase.
                this.canBuy = false;
                if(confirm){
                    properties[this.location] = pId;
                    this.money -= 100;               //FIX THIS IF NECESSARY - make it accurate to the price
                }

            }
        };
    }
}

class Dice {                         //Constructs new Dice object    dice = new Dice(); 
    constructor() {
        this.dieA = 0;
        this.dieB = 0;
        this.wasDouble = false;
        this.total = 0;
        this.roll = function() {              //This randomizes the numbers and creates all needed data    dice.roll();            this.dieA = Math.ceil(Math.random() * 6);
            this.dieB = Math.ceil(Math.random() * 6);
            this.total = this.dieA + this.dieB;
            this.wasDouble = false;
            if(this.dieA == this.dieB) {
                this.wasDouble = true;
            }
        };
    }
}

class Deck{
    constructor() {
        this.selector = 0;
        this.amountDrawn = 0;
        this.available = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
        this.drawSuccess = false;

        this.drawCard = function() {
            this.drawSuccess = false;
            this.selector = Math.ceil(Math.random() * 16) - 1;

            do {  //iterates from a random point in the deck until a non - drawn card is found, if all cards have been drawn, place all cards back into the deck.
                if(this.available[this.selector]) {
                    this.available[this.selector] = false;
                    this.drawSuccess = true;
                    this.amountDrawn += 1;
                }else{
                    if(this.amountDrawn >= 16) {   //if all cards have been drawn, place all cards back into the deck
                        this.available = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
                        this.amountDrawn = 0;
                    };
                    this.selector += 1;
                    if(this.selector > 15) this.selector = 0;
                };
            } while(!this.drawSuccess);
            
        };

        this.cardAction = function() {

        };
    }
};

const CommunityChest = new Deck(); //card decks, I am using these names in the action function in Player
const Chance = new Deck();

const playerOne = new NewPlayer(1, 'Bunger');
console.log(playerOne.location);
playerOne.roll();
console.log(locationType[playerOne.location]);
console.log(playerOne.location);

let cards = new Deck();

cards.drawCard();
console.log(cards.selector)
console.log(cards.amountDrawn);