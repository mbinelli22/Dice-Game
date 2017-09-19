"use strict"

// roll all the dice at the same time and add up total. if you roll a 1, 5, 10, 15, 
// or 20 on the 20 sided die (divisible by 5. or 1) you go back to zero and have to take a drink. first one 
// to 150 wins.


// let rollDie1 = "4 sided die"
// let rollDie2 = "6 sided die"
// let rollDie3 = "8 sided die"
// let rollDie4 = "10 sided die"
// let rollDie5 = "12 sided die"
// let rollDie6 = "20 sided die"

let rollDie1 = Math.floor(Math.random()*4 + 1);

let rollDie2 = Math.floor(Math.random()*6 + 1);

let rollDie3 = Math.floor(Math.random()*8 + 1);

let rollDie4 = Math.floor(Math.random()*10 + 1);

let rollDie5 = Math.floor(Math.random()*12 + 1);

let rollDie6 = Math.floor(Math.random()*20 + 1);

console.log ("You rolled a: "+rollDie1+"");
console.log ("You rolled a: "+rollDie2+"");
console.log ("You rolled a: "+rollDie3+"");
console.log ("You rolled a: "+rollDie4+"");
console.log ("You rolled a: "+rollDie5+"");
console.log ("You rolled a: "+rollDie6+"");

