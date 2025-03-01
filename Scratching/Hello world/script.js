"use strict";

const zaki = {
    age: 18,
    country: "Indonesia",
    student: true
}

let userInput = zaki[prompt("what do you want to know about me?").toLowerCase()];
console.log(userInput);