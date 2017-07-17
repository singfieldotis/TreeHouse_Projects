// quiz begins , no answers correct
var correct = 0;

//ask quesitons
var answer1 = prompt("What is the best gaming console?");
if (answer1.toUpperCase() === 'XBOX') {
  correct += 1;
} 
var answer2 = prompt("What is my favorite NFL team?");
if (answer2.toUpperCase() === 'BUCCANEERS') {
  correct += 1;
}
var answer3 = prompt("What is my favorite EPL team?");
if (answer3.toUpperCase() === 'CHELSEA') {
  correct += 1;
}
var answer4 = prompt("Who is the greatest band of all time?");
if (answer4.toUpperCase() === 'METALLICA' ) {
  correct += 1;
}
var answer5 = prompt("Does a bear shit in the woods?");
if (answer5.toUpperCase() === 'YES') {
  correct += 1;
}

// output results
document.write("<p>You got " + correct + " questions correct. </p>");

// output rank
if (correct === 5) {
  document.write("<p><strong>You got a gold crown!</strong><p>");
} else if (correct >= 3) {
  document.write("<p><strong>You got a silver crown!</strong></p>");
} else if (correct >= 1) {
  document.write("<p><strong>You got a bronze crown!</strong></p>");
} else {
  document.write("<p><strong>You don't even know me.... NO CROWN FOR YOU!  :( </strong></p>");
}