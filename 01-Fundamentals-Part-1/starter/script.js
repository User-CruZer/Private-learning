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

// equality operators: == vs ===

const age = 18;

// Better to use this:
if(age === 18) console.log("you will face the reality");

if(age == 18) console.log("get ready for the reality that awaits you");

// const userInput = Number(prompt("insert your favorite number 🗿"));

if(userInput === 0) {
    console.log("uhh okay?");
} else if(userInput < 69) {
    console.log("You sure?");
} else if(userInput === 69){
    console.log("Nice!");
}

if(userInput !== 69) {
    console.log("not 69?")
}

// Logical operators 

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Sarah is recommended to not driving");
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Sarah is cannot drive");
}

// Coding Exercise 3: Challenge #3:

// Write your code below. Good luck! 🙂

const scoreDolphins = (96 - 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("both wins win the trophy");
}

// the switch statement:

const day = "sunday";
switch(day) {
    case "saturday": // day === "saturday"
        console.log("Its saturday");
        console.log("Let's study");
        break;
    case "monday":
        console.log("Its monday");
        console.log("wakey wakey its time for school");
        break;
    case "tuesday":
        console.log("Its tuesday");
        console.log("work");
        break
    case "wednesday":
        console.log("lets walk at the park for 30 - 45 minutes");
        console.log("i dont know");
        break;
    case "friday":
        console.log("Dont forget the friday prayer");
        break;
    case "sunday":
        console.log("rest");
        break
    default:
        console.log("invalid days")
};

if(day == "monday") {
    console.log("its monday");
} else if (day === "tuseday") {
    console.log("its tuesday");
} else if (day === "wednesday") {
    console.log("its wednesday");
} else if (day === "thursdays") {
    console.log("its thursday");
} else if (day === "friday") {
    console.log("its friday");
} else if (day === "saturday" || day === "sunday") {
    console.log("lets take some rest for now");
} else {
    console.log("invalid syntax")
}

// The Conditional (Tenary) operator!

const age = 18;
age <= 18 ? console.log("I'd like to start my journey") :
console.log("Stay focus my brother, we must stay focus");

const goal = age < 18 ? "You can play" : "stay focus brother";
console.log(goal);

let drink2;
if (age >= 18) {
    drink2 = "coffee";
} else {
    drink2 = "milk";
}
console.log(drink2)
console.log(`i would prefer ${age >= 18 ? "Coffee" : "Milk"} please..`);

const bill = 275;

// Write your code below. Good luck! 🙂 

let tip;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(bill);
console.log(tip);
console.log(bill + tip);
*/

