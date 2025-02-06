/*

// let js = "amazing";
// if (js === "amazing") alert ("JavaScript is FUN");

console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);


// part of learning variables on JavaScript
let firstName = "jonas";
// camelCase:
let first
let firstNamePerson
// Others:
let first_name_person
// constant (a variable that cannot be changed)
// by using const variable declaration
const PI = 3.1415;
console.log(typeof(PI));

let myFirstJob = "Unemployed XD";
let myCurrentJob = "College Student";


console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(myFirstJob);


// value:
// object
let me = {
    name: "jonas"
};
// primitive
let firstCall = "jonas";
let age = 30;


// Boolean data type:
true;
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof(true));
console.log(typeof(javaScriptIsFun));
console.log(typeof("Hello There"));
console.log(typeof(69));

// Changing varables
javaScriptIsFun = "phone";
console.log("Nice")
console.log(typeof(javaScriptIsFun));

let year;
console.log(year);
console.log(typeof(year));

console.log("===========")

year = 1945
console.log(year);
console.log(typeof(year));

console.log(typeof null);

let age = 18;
age = 19;
// we can use this methode to mutate or reassigning the variable to change the value of the variable 

// const a variable that cannot be changed
const birthYear = 2006
// birthYear = 2005

// const job; // a variable of const cannot be changed as well

// Basic operators in JavaScript

// Math operator:
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log("Sarah age:", ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **3);

// ramdom testing:
console.log("warna", "hitam");
let color = "warna";
let black = "hitam";
console.log(color + black);


// Assignment operator:
let x = 10 + 5; // x = 10 + 5 = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x = x + 1 = 101
x --; // x = x - 1 = 100
x --; // x = x - 1 = 99
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas >= 18);

// Operator precedence:

const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
// expected output = 10

let x, y;
x = y = 25 - 10 -5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// Coding Exercise 1: Challenge #1

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);
console.log(BMIMark > BMIJohn)

// Strings and template literals:
const firstName = "Zaki";
const job = "Freelancer";
const birthYear = 2006;
const year = 2025;

const jonas = "i'm  " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const zaki = `i'm ${firstName}, a ${year - birthYear} years old, and i'm a ${job}!`;
console.log(zaki);

console.log("string with \n\
multiple \n\
line");

console.log(`string with
multiple
line`)

const age = 15;

if(age >= 18) {
    console.log(`sarah can start driving license 😋☝️`);
} else {
    const yearsLeft = 18 - age;
    console.log(`You currently cannot have driver license, You need to wait for ${yearsLeft} more years`);
}

const birthYear = 2006;

let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century);

// Coding Exercise 2: Challenge #2:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(`${BMIMark}
${BMIJohn}`);

//  Write your code below. Good luck! 🙂

// const markBmi = 28.3;
// const markJohn = 23.9;
if (BMIMark > BMIJohn) {
    console.log(`Mark's bmi (${BMIMark}) is higher than john's (${BMIJohn})!`)
} else {
    console.log(`john's bmi (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

// Type Conversion:
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // -> Convert it into Number
console.log(Number("Joko")); // NaN: Not a number
console.log(String(23), 23) // -> Convert it into String

// Type coercion:
console.log("i am " + 23 + " years old");
console.log("23" - "10" - 31);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// True and falsy value;
// 5 Falsy values = 0, "", undefined, null. NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));


const money = 12;

if(money) {
    console.log(`you got ${money}$`);
} else {
    console.log("You should get a job!");
}