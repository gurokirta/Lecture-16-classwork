"use strict";
// ceil , floor , round - Math.
// pow - ხარისში აყვანა

// var number1 = prompt("შეიყვანეთ პირველი რიცხვი");
// var number2 = prompt("შეიყვანეთ მეორე რიცხვი");

// console.log("number1 = ", number1);
// console.log("number2 = ", number2);

// // First Method
// var tempNum = number1;
// number1 = number2;
// number2 = tempNum;

// console.log("number1 = ", number1);
// console.log("number2 = ", number2);

var num1 = prompt("pirveli cvladi");
var num2 = prompt("pirveli cvladi");
var num3 = prompt("pirveli cvladi");

if (num1 > num2 && num1 > num3) {
  console.log(num1, "არის ყველაზე მაღალი");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, "არის ყველაზე მაღალი");
} else if (num3 > num1 && num3 > num2) {
  console.log(num3, "არის ყველაზე მაღალი");
}

// console.log(num1, num2, num3);
