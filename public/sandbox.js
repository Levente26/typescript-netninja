"use strict";
// LESSON 2
const character = 'luigi';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
// LESSON 3
let char = 'luigi';
let age = 21;
let isBlackBelt = false;
// character = 20; not possible
char = 'yoshi';
age = 26;
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(26));
// LESSON 4
//arrays
let names = ['Levi', 'Demi', 'Döme'];
names.push('Yoshi');
// names.push(3); cant do that
// names[0] = 3;
let number = [10, 20, 30, 40];
number.push(26);
// number.push('Levi'); cant do that
// number[0] = 'Levi';
let mixed = ['ken', 4, 'chun-li', 26];
mixed.push('ryu');
mixed.push(55);
mixed[0] = 87;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 28
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = 'num';
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 18,
    // must be add the same structure 
};
// LESSON 5
//explicit types 
let charac;
let charAge;
let isLoggedIn;
age = 30;
// age = 'luigi'; dont do that man
isLoggedIn = true;
// arrays
let ninjas;
ninjas = ['yoshi', 'mario'];
// union types
let mixedArr = [];
mixedArr.push(24);
mixedArr.push('hello');
let uid;
uid = 87;
uid = 'str';
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = {
    name: 'mario',
    age: 20,
    belt: 'white'
};
// LESSON 6 
let ageAny = 25;
ageAny = 'zzz';
ageAny = true;
let mixedArray = [];
mixedArray.push(54);
mixedArray.push('eh');
let ninjasObj;
ninjasObj = {
    name: 'yoshi',
    age: '25 as a string'
};
// LESSON 7
// tsconfig
// tsc --init
// LESSON 8
let greet;
greet = () => {
    console.log('hello world');
};
const add = (a, b, c) => {
    // ? means optional
    console.log(a + b);
    console.log(c);
};
add(10, 8);
const minus = (a, b) => {
    return a - b;
};
let result = minus(14, 85);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetFunc = (user) => {
    console.log(`${user.name} says hello`);
};
// LESSON 10
// example 1
let greeT;
greeT = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetailsAgain;
logDetailsAgain = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
