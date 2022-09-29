// trim()           -----> Used to remove the spaces around the characters
// toUpperCase()
// toLowerCase()
// slice()          -----> Used to select a particular slice from the string 

let firstName = "abdullah";

// console.log(firstName.length);
// firstName = firstName.trim(); // "   abdullah    " ---> will be changed to "abdullah"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(0, 5); 
console.log(newString);