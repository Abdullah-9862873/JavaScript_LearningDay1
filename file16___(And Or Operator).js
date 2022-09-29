// and or opoerator

let firstName = "Abdullah";
let age = 22;

if(firstName[0] === "A" && age>=22){
    console.log("Yes the name starts from letter A and he is an adult");
}else{
    console.log("The condition doesn't fit here");
}


if(firstName[0] === "A" || age>18){
    console.log("Condition is true");
}else{
    console.log("Inside else");
}