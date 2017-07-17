var number1 = prompt("Give me a number!");
var number2 = prompt("Give me higher number");
var userNumber1 = parseInt(number1);
var userNumber2 = parseInt(number2);
var userRandomNumber = Math.floor(Math.random() * (userNumber1 - userNumber2 + 1) ) + userNumber2;
var message = "<p>" + userRandomNumber + " is a number between " + userNumber1 + " and " + userNumber2 + ".</p>"
document.write(message);

