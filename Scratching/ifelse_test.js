let age = 18;
console.log(`Sarah age is ${age} years old.`);
if (age >= 18) {
    console.log('Sarah can have driving license.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah need another ${yearsLeft} years :))`);
}

age = age + 5;
console.log(`Sarah age now is ${age} years old.`);