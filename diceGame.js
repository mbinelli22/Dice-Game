"use strict"

// player rolls all the dice at the same time except the 4 sided and the 20 sided dice. those two will be rolled seperatly right after.
//first, the player will add up the total of all the dice. 
// whatever number is rolled on the 4 sided die = number of seconds you drink your kool aid for.
// if a 5, 10, 15 or 20 are rolled on the 20 sided die then->
// 5 = player who rolled, drinks kool aid for the amount of seconds rolled on the 4 die and you loose all your points
// 10 = player gets to pick another player to drink kool aid for x amount of seconds
// 15 = everyone else drinks kool aid for x amount of seconds
// 20 = player gets to pick another player to drink kool aid for x amount of seconds and that player also looses all their points
// players only get one turn per round and play until someone gets 100 points.


// let rollDie1 = "4 sided die"
// let rollDie2 = "6 sided die"
// let rollDie3 = "8 sided die"
// let rollDie4 = "10 sided die"
// let rollDie5 = "12 sided die"
// let rollDie6 = "20 sided die"

let player1 = prompt("Enter player 1 name here: \nFive player maximum.");
let player2 = prompt("Enter player 2 name here: \nFive player maximum.");
let player3 = prompt("Enter player 3 name here: \nFive player maximum.");
let player4 = prompt("Enter player 4 name here: \nFive player maximum.");
let player5 = prompt("Enter player 5 name here: \nFive player maximum.");

// create a funtion that puts names into an array

	let playerNamesArr = [player1, player2, player3, player4, player5];
	console.log("Player 1: " + playerNamesArr[0]);
	console.log("Player 2: " + playerNamesArr[1]);
	console.log("Player 3: " + playerNamesArr[2]);
	console.log("Player 4: " + playerNamesArr[3]);
	console.log("Player 5: " + playerNamesArr[4]);

// make a function that rolls all the dice
		let playerOneRoll = prompt("To roll the dice type YES");
		let score = rollDie1+rollDie2+rollDie3+rollDie4+rollDie5+rollDie6
function player1Score(playerOneRoll,score) {
	if (playerOneRoll = "yes") {
		console.log ("4 sided die -> You rolled a: "+rollDie1+"");
		console.log ("6 sided die -> You rolled a: "+rollDie2+"");
		console.log ("8 sided die -> You rolled a: "+rollDie3+"");
		console.log ("10 sided die -> You rolled a: "+rollDie4+"");
		console.log ("12 sided die -> You rolled a: "+rollDie5+"");
		console.log ("20 sided die -> You rolled a: "+rollDie6+"");

			if (rollDie6 === 5){
				score = (0);
				}
			if (rollDie6 === 20){
				score = (0);
				}
		console.log (player1"'s score is:" + score());
		}
}
// make a function that keeps track of score for each person

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
// console.log(player5);


let rollDie1 = Math.floor(Math.random()*4 + 1);
let rollDie2 = Math.floor(Math.random()*6 + 1);
let rollDie3 = Math.floor(Math.random()*8 + 1);
let rollDie4 = Math.floor(Math.random()*10 + 1);
let rollDie5 = Math.floor(Math.random()*12 + 1);
let rollDie6 = Math.floor(Math.random()*20 + 1);






let diceRoll6=(rollDie6);

switch (diceRoll6) {
    case 5:
        alert("You rolled a 5! \nDRINK! for: " +rollDie1+ " seconds.\nAnd go back to zero points.");
        break;
    case 10:
        alert("You rolled a 10! \nChoose someone to DRINK! for: " +rollDie1+ " seconds.");
        break;
    case 15:
    	alert("You rolled a 15! \nEveryone, besides your slick self, has to DRINK! for: " +rollDie1+ " seconds.");
    	break;
    case 20:
    	alert("You rolled a 20! \nPick someone to DRINK! for: " +rollDie1+ " seconds. \nGo back to zero points.");
    	break;
    default:
        
        break;
}

// button shit

// let button = document.createElement("button");
// button.innerHTML = "Roll Die";

// let body = document.getElementsByTagName("body")[0];
// body.appendChild(button);

// button.addEventListener("click", function () {
// 	alert('die rolled');
// });
