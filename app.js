var Fnum = parseInt(prompt("What is your first Number"));
var Lnum = parseInt(prompt("What is your last Number"));

let Num = "your name is" + " " + Fnum + " " + Lnum;

alert(Num);

var firstName = prompt("What is your first Name");
var lastName = prompt("What is your last Name");

var fname = firstName.slice(0,4);
var lname = lastName.slice(0,1);

var newName = fname + lname;

var lower = newName.toLocaleLowerCase();

output = "Your Capacity user id is " + lower;

alert(output);