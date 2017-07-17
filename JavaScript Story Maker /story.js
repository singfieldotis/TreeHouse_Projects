alert('Story Time!');
var noun = prompt('Give me a noun.');
var userName = prompt('What is your first name?')
var verb = prompt ('Give me a verb');
var adjective = prompt('Now, just give me an adjective');
var story = "There once was a kid named " + userName + ". ";
story += userName + ", loved to ";
story += verb + " with their ";
story += noun + ". ";
story += "They are very " + adjective;
story += " at " + noun + ".";
document.write(story);