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

// understanding arrays:

const friends = ["Ridwan", " Are", " Fitra"];
console.log(friends);

const years = new Array(1969, 2006, 1999, 2025);
console.log(years);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = " Kurniati";
console.log(friends);

const firstName = "zaki";
const zaki = [firstName, "Bogor", 2025 - 2006, "collegian", `Friends of zaki = ${friends}`];
console.log(zaki[zaki.length - 1]);
console.log(zaki);

// exercise:
function calcAge1(birthyear) {
    return 2025 - birthyear;
}
const age = [2006, 2007, 1999, 1945];
const ageVar = [calcAge1(age[1]), calcAge1(age[0]), calcAge1(age[2])];
const ageVar1 = new Array([calcAge1(age[1]), calcAge1(age[0]), calcAge1(age[2])]);

console.log(ageVar);
console.log(ageVar1);

// Basic array operation methods:
// Add elements:
const friends = ["Ridwan", " Are", " Fitra"];
friends.push("Ramdan"); // Works simillarly as append in python
friends.unshift("Malik"); // Adding a value to the first index
console.log(friends);

// Remove elements:
friends.pop(); // removing the last element from the array
const popped = friends.pop() // the pop method will return the removed value and we save it inside here!
console.log(friends);
console.log(popped);

friends.shift(); // remove the value of the first index
console.log(friends);

console.log(friends.indexOf("Ridwan"));
console.log(friends.indexOf("Ramdan"));

console.log(friends.includes("Ridwan"));
console.log(friends.includes("Ramdan"));

if (friends.includes("Ramdan")) {
    console.log("you have a friend called ramdan");
} else {
    console.log("you dont have friend called ramdan")
}

if (friends.includes("Ridwan")) {
    console.log("you have a friend called Ridwan");
} else {
    console.log("you dont have friend called Ridwan")
}

// Coding exercise 6:

function calcTip(bill) {
    bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return bill
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(tips[0] + bills[0]), (bills[1] + tips[1]), (bills[2], + tips[2])];

console.log(totals);

// introduction to objects

// array:
const zakiArray = [
    "zaki",
    "albadri",
    2025 - 2006,
    ["ridwan", "fitra", "are", "ramdan"]
];
console.log(zakiArray);

// Object:
const zaki = {
    firstName: "zaki",
    lastName: "albadri",
    age: 2025 - 2006,
    job: "unemployed",
    friends: ["ridwan", "fitra", "are", "ramdan"]
};

// Dot vs bracket notation:

const zaki = {
    firstName: "zaki",
    lastName: "albadri",
    age: 2025 - 2006,
    job: "unemployed",
    friends: ["ridwan", "fitra", "are", "ramdan"]
};

console.log(zaki);

console.log(zaki.age);
console.log(zaki["firstName"]);

const nameKey = "Name";
console.log(zaki["first" + nameKey]);
console.log(zaki["last" + nameKey]);

// const interestedIn = prompt("what do you want to know about zaki? Choose between firstName, lastName, age, job, and friends");
// console.log(zaki[interestedIn]);


zaki.location = "Bogor";
zaki["tiktok"] = "CruzeRx";

// if (zaki[interestedIn]) {
//     console.log(zaki[interestedIn]);
// } else {
//     console.log("wrong request! Choose between firstName, lastName, age, job, and friends");
// }

console.log(zaki.location);
console.log(zaki["tiktok"]);

// Challenge
// jonas has 3 friends, and his best friends is called michael

const jonas = {
    firstName: "jonas",
    friends: ["Michael", "Peter", "Steven"],
    bestFriends: "Michael"
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// object methods:

const jonas = {
    firstName: "jonas",
    lastName: "schmedtmann",
    birthyear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicences: true,

    // calcAge: function(birthyear) {
    //     return 2037 - birthyear;
    // }
    
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthyear;
    
    calcAge: function() {
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    checkLicense: function() {
        if(this.hasDriverLicences) {
            return "he has drivers lincense"
        } else {
            return "he does not have drivers license"
        }
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
// console.log(jonas["calcAge"]())

// challenge:
// jonas is a 46 year old teacher, and he has a driver's license 

console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job}, and ${jonas.checkLicense()}`);

*/

// coding exercise 7:

const mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullname}'s bmi (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`)
} else {
    console.log(`${mark.fullname}'s bmi (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`)
}