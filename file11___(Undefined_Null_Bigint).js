// Undefined, Null and BigInt

// Undefined
"use strict";

            // When the variable is made but it has no value except the const vaalue

let firstName;
console.log(typeof firstName);
firstName = "Abdullah";
console.log(typeof firstName, firstName);

            // This will throw an error

            // const first_Name;
            // console.log(typeof first_Name);



// Null
let i = null;
console.log(i);
console.log(typeof i);


// BigInt
let myNumber = 123;
console.log(Number.MAX_SAFE_INTEGER);       // Max number you can store

            // Conversion of number to BigInt
myNumber = BigInt(myNumber);
console.log(typeof myNumber);

            // You can also do
let sameMyNumber = 123n;
console.log(typeof sameMyNumber);