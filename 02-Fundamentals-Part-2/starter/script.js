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
// reviewing function

// expression function:
const calcAge = function(birthyear) {
    return 2025 - birthyear;
}
// console.log(calcAge(2006));

function yearsLeftUntilRetirement(birthyear, firstName) {
    const age = 2025 - birthyear;
    const retirement = 60 - age;

    return `${firstName} retires in ${retirement} years left`
}


function retirement(birthyear, firstName) {
    const age = calcAge(birthyear);
    const retirement = 60 - age;

    if(retirement >= 0 ) {
        console.log(`${firstName} retires in ${retirement} years left`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years left`
}
retirement(1969, "bapak");
retirement(1999, "ahmad");
retirement(2006, "zaki");
retirement(1964, "joko");

// coding exercise 5:
const calcAverage = (scores1, scores2, scores3) => (scores1 + scores2 + scores3) / 3;
console.log(calcAverage(44, 23, 71));
function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("no team wins...")
    }
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);
*/
