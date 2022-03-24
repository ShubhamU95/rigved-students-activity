let read = require("readline-sync");
let fs = require('fs');

let name = read.question("Please Enter Your Name : ");
let age = read.question("Please Enter Your Age : ");
let sal = read.question("Please Enter Your Salary : ");

let user = {n:name, a:age, s:sal};
let jsonString = JSON.stringify(user);

fs.writeFileSync('user_data.json', jsonString);

console.log("Stored the values in Json file!")