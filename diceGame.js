"use strict"

// roll all the dice at the same time and add up total. If you roll a 1, 5, 10, 15, 
// or 20 on the 20 sided die (divisible by 5. or 1) you go back to zero and have to take a drink. first one 
// to 100 wins.

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
	console.log(playerNamesArr);

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



console.log ("4 sided die; You rolled a: "+rollDie1+"");
console.log ("6 sided die; You rolled a: "+rollDie2+"");
console.log ("8 sided die; You rolled a: "+rollDie3+"");
console.log ("10 sided die; You rolled a: "+rollDie4+"");
console.log ("12 sided die; You rolled a: "+rollDie5+"");
console.log ("20 sided die; You rolled a: "+rollDie6+"");


let score = rollDie1+rollDie2+rollDie3+rollDie4+rollDie5+rollDie6

if (rollDie6 === 5){
	score = (0);
}
if (rollDie6 === 10){
	score = (0);
}
if (rollDie6 === 15){
	score = (0);
}
if (rollDie6 === 20){
	score = (0);
}
console.log ("Your score is:" + score);


let diceRoll6=(rollDie6);

switch (diceRoll6) {
    case 5:
        alert("You rolled a 5! \nDRINK! \nAnd go back to zero points.");
        score=(0);
        break;
    case 10:
        alert("You rolled a 10! \nDRINK! \nAnd go back to zero points.");
        score=(0);
        break;
    case 15:
    	alert("You rolled a 15! \nDRINK! \nAnd go back to zero points.");
    	score=(0);
    	break;
    case 20:
    	alert("You rolled a 20! \nDRINK! \nAnd go back to zero points.");
    	score=(0);
    	break;
    default:
        
        break;
}

// button shit

let button = document.createElement("button");
button.innerHTML = "Roll Die";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
	alert('did something');
});
