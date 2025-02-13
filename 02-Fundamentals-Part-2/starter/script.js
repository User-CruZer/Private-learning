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
*/

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

