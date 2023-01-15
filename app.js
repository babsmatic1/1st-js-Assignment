var Fname = prompt("What is your first Name");
var Lname = prompt("What is your last Name");

let Name = "your name is" + " " + Fname + " " + Lname;

alert(Name);

var firstName = prompt("What is your first Name");
var lastName = prompt("What is your last Name");

var fname = firstName.slice(0,4);
var lname = lastName.slice(0,1);

var newName = fname + lname;

var lower = newName.toLocaleLowerCase();

alert(lower);