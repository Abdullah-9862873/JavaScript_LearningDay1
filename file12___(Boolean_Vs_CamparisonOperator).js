"use strict"

// Boolean vs Comaprison Operators

let num1 = 7;
let num2 = 7;

console.log(num1 == num2);

// == checks for the values and not the data types
num1 = 7;
num2 = "7";

console.log(num1 == num2 );


// === checks for values as well as data types
num1 = 7;
num2 = "7";

console.log(num1 === num2);

// != vs !==

num1 = 7;
num2 = 7;

console.log(num1 != num2);

// Only checking for values

num1 = 7;
num2 = "7";

console.log(num1 != num2);


// Checking for the data types too
num1 = 7;
num2 = "7";

console.log(num1 !== num2);