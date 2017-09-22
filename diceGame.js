"use strict"

// let rollDie1 = "4 sided die"
// let rollDie2 = "6 sided die"
// let rollDie3 = "8 sided die"
// let rollDie4 = "10 sided die"
// let rollDie5 = "12 sided die"
// let rollDie6 = "20 sided die"

function getPlayerNames() {
	let player1 = prompt("Enter player 1 name here: \nFive player maximum.");
	let player2 = prompt("Enter player 2 name here: \nFive player maximum.");
	let player3 = prompt("Enter player 3 name here: \nFive player maximum.");
	let player4 = prompt("Enter player 4 name here: \nFive player maximum.");
	let player5 = prompt("Enter player 5 name here: \nFive player maximum.");
	let playerNamesArr = [player1, player2, player3, player4, player5];
	return playerNamesArr;
}

// let player1 = prompt("Enter player 1 name here: \nFive player maximum.");
// let player2 = prompt("Enter player 2 name here: \nFive player maximum.");
// let player3 = prompt("Enter player 3 name here: \nFive player maximum.");
// let player4 = prompt("Enter player 4 name here: \nFive player maximum.");
// let player5 = prompt("Enter player 5 name here: \nFive player maximum.");

// // create a funtion that puts names into an array
function displayPlayerNames(playerNamesArr) {
	console.log("Player 1: " + playerNamesArr[0]);
	console.log("Player 2: " + playerNamesArr[1]);
	console.log("Player 3: " + playerNamesArr[2]);
	console.log("Player 4: " + playerNamesArr[3]);
	console.log("Player 5: " + playerNamesArr[4]);
}

// make a function that capitalizes first letter in player names.
// let userInput = prompt("Enter a phrase yo:");

// function capitalizeWords(phraseToCapitalize) {
// 	let playerNamesArr = phraseToCapitalize.split(" ");
// 	for (let i = 0; i < playerNamesArr.length; i++) {
// 		playerNamesArr[i] = playerNamesArr[i].charAt(0).toUpperCase() + playerNamesArr[i].slice(1);
// 	}
// 	return playerNamesArr.join(" ");
// }

// var answer = capitalizeWords;
// console.log(answer);

// make a function that rolls all the dice and gets a new number everytime
		

function diceRoll() {
	let rollDie1 = Math.floor(Math.random()*4 + 1);
	let rollDie2 = Math.floor(Math.random()*6 + 1);
	let rollDie3 = Math.floor(Math.random()*8 + 1);
	let rollDie4 = Math.floor(Math.random()*10 + 1);
	let rollDie5 = Math.floor(Math.random()*12 + 1);
	let rollDie6 = Math.floor(Math.random()*20 + 1);
	console.log ("4 sided die -> You rolled a: "+rollDie1+"");
	console.log ("6 sided die -> You rolled a: "+rollDie2+"");
	console.log ("8 sided die -> You rolled a: "+rollDie3+"");
	console.log ("10 sided die -> You rolled a: "+rollDie4+"");
	console.log ("12 sided die -> You rolled a: "+rollDie5+"");
	console.log ("20 sided die -> You rolled a: "+rollDie6+"");
	let totalScores = totalScore(rollDie1,rollDie2,rollDie3,rollDie4,rollDie5,rollDie6);
	totalScores = switchCaseConsequences(rollDie6, totalScore);
	return totalScores();
}

function switchCaseConsequences(rollDie6, score, rollDie1) {
let diceRoll6=(rollDie6);
switch (diceRoll6) {
    case 5:
        alert("You rolled a 5! \nDRINK! for: " +rollDie1+ " seconds.\nAnd go back to zero points.");
        score=(0);
        break;
    case 10:
        alert("You rolled a 10! \nChoose someone to DRINK! for: " +rollDie1+ " seconds.");
        break;
    case 15:
    	alert("You rolled a 15! \nEveryone, besides your slick self, has to DRINK! for: " +rollDie1+ " seconds.");
    	break;
    case 20:
    	alert("You rolled a 20! \nPick someone to DRINK! for: " +rollDie1+ " seconds. \nGo back to zero points.");
    	score=(0);
    	break;
    default:
        break;
	}
	return score;
}

function totalScore(rollDie1,rollDie2,rollDie3,rollDie4,rollDie5,rollDie6) {
	let score = (rollDie1+rollDie2+rollDie3+rollDie4+rollDie5+rollDie6);
	return score;
}

// for loop that goes on until someone reaches 100 points.
// function loopTo100(playerNamesArr) {
// 	let playerOneTurn = prompt(playerNamesArr[0] +"'s turn \nTo roll the dice type YES");
// 	while (playerOneTurn === ("yes")){
// 		let rollDieResults = diceRoll();
// 		let switchCaseResults = switchCaseConsequences(); {
// 		console.log (rollDieResults);
// 		if (rollDieResults === switchCaseConsequences) 
// 			console.log(switchCaseResults);
// 		}
// 		else if (diceRoll != switchCaseResults){
// 		console.log(totalScore);
// 		}
// 	}
// 	let playerTwoTurn = prompt(playerNamesArr[1] +"'s turn \nTo roll the dice type YES");
// 	foo = diceRoll()
// 	while (playerTwoTurn === ("yes")){
// 		console.log(diceRoll);
// 		if (diceRoll === switchCaseResults) {
// 			console.log(switchCaseResults);
// 		}
// 	else if (diceRoll != switchCaseResults){
// 		console.log(totalScore);
// 		}
// 	}	
// 	let playerThreeTurn = prompt(playerNamesArr[2] +"'s turn \nTo roll the dice type YES");
// 	while (playerThreeTurn === ("yes")){
// 		console.log(diceRoll);
// 		if (diceRoll === switchCaseResults) {
// 			console.log(switchCaseResults);
// 		}
// 	else if (diceRoll != switchCaseResults){
// 		console.log(totalScore);
// 		}
// 	}
// 	let playerFourTurn = prompt(playerNamesArr[3] +"'s turn \nTo roll the dice type YES");
// 	while (playerFourTurn === ("yes")){
// 		console.log(diceRoll);
// 		if (diceRoll === switchCaseResults) {
// 			console.log(switchCaseResults);
// 		}
// 	else if (diceRoll != switchCaseResults){
// 		console.log(totalScore);
// 		}
// 	}
// 	let playerFiveTurn = prompt(playerNamesArr[4] +"'s turn \nTo roll the dice type YES");
// 	while (playerFiveTurn === ("yes")){
// 		console.log(diceRoll);
// 		if (diceRoll === switchCaseResults) {
// 			console.log(switchCaseResults);
// 		}
// 	else if (diceRoll != switchCaseResults){
// 		console.log(totalScore);
// 		}
// 	}

function loopTo100(playerNamesArr) {
	let playerOneTurn = prompt(playerNamesArr[0] +"'s turn \nTo roll the dice type YES");
	let rollDieResults = diceRoll();
	let switchCaseResults = switchCaseConsequences();
	do{
		console.log(diceRoll);
		console.log(switchCaseResults);
	}	
	while (diceRoll() === switchCaseConsequences());
}
// calls all the funtions at the end 
function runGame() {
	let playerNamesArr = getPlayerNames();
	displayPlayerNames(playerNamesArr);
	loopTo100(playerNamesArr);
}
runGame();



// let playerTwoRoll = prompt(playerNamesArr[1]+"'s turn! \nTo roll the dice type YES");
// function player2Score(playerTwoRoll,score) {
// 	if (playerTwoRoll === "yes") {
// 		console.log ("4 sided die -> You rolled a: "+rollDie1+"");
// 		console.log ("6 sided die -> You rolled a: "+rollDie2+"");
// 		console.log ("8 sided die -> You rolled a: "+rollDie3+"");
// 		console.log ("10 sided die -> You rolled a: "+rollDie4+"");
// 		console.log ("12 sided die -> You rolled a: "+rollDie5+"");
// 		console.log ("20 sided die -> You rolled a: "+rollDie6+"");
// 		}	
// 	}
// 	if (rollDie6 === 5){
// 		score = (0);
// 		}
// 	if (rollDie6 === 20){
// 		score = (0);
// 		}
// 		console.log(playerNamesArr[1]+"'s score is:" + score);


// let playerThreeRoll = prompt(playerNamesArr[2]+"'s turn! \nTo roll the dice type YES");
// function player3Score(playerThreeRoll,score) {
// 	if (playerThreeRoll === "yes") {
// 		console.log ("4 sided die -> You rolled a: "+rollDie1+"");
// 		console.log ("6 sided die -> You rolled a: "+rollDie2+"");
// 		console.log ("8 sided die -> You rolled a: "+rollDie3+"");
// 		console.log ("10 sided die -> You rolled a: "+rollDie4+"");
// 		console.log ("12 sided die -> You rolled a: "+rollDie5+"");
// 		console.log ("20 sided die -> You rolled a: "+rollDie6+"");
// 		}	
// 	}
// 	if (rollDie6 === 5){
// 		score = (0);
// 		}
// 	if (rollDie6 === 20){
// 		score = (0);
// 		}
// 		console.log(playerNamesArr[2]+"'s score is:" + score);		