// using strict mode:
"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive")

// undestanding function:

function joko(operator, keys) {
    operator = prompt("whats your name?");
    console.log(`hello ${operator}`);
    keys = prompt("what's your key number?");
    console.log(`so ${keys} is your key number!`)
}

joko()

// function declaration vs expression


// function decleration
function calcAge1(birthyear) {
    return 2025 - birthyear;
}
const age1 = calcAge1(2006);

// function expression
const calcAge2 = function(birthyear) {
    return 2025 - birthyear
}
const age2 = calcAge2(2008);
console.log(age1, age2);


// arrow function:

// Function expression:
const calcAge2 = function(birthyear) {
    return 2025 - birthyear
}

// Arrow function:
// but in one line of code:
birthyear => 2024 - birthyear;
const calcAge3 = birthyear => 2025 - birthyear;
const age3 = calcAge3(1999);
console.log(age3);

// an example of using arrow function in a multiple line of code:
const yearsUntilRetirement = birthyear => {
    const age = 2025 - birthyear;
    const retirement = 60 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1999));

// an example using arrow function for more than one parameter
const yearsLeft2 = (birthyear, firstName) => {
    const age = 2025 - birthyear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years left`;
}
console.log(yearsLeft2(2006, "Zaki"));
*/

// function calling another function:

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges. `;
    return juice
}
console.log(fruitProcessor(2, 3));
