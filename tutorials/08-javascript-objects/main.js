import { makeButton } from "./button.js";

makeButton();

// number primitives
let age1 = 12;
let age2 = age1;
age2 = 20;

// string primitives
let name1 = "fred";
let name2 = name1;
name2 = "ginger";

// objects
let person1 = {
  name: "fred",
  age: 12,
};

let person2 = person1;

person2.age = 20;

function incrementPersonAge(person) {
  person.age++;
}

incrementPersonAge(person1);

// object destructuring

const { name, age } = person1;
const { name: myname, age: myage } = person1;

// arrays

const numbers1 = [1, 2, 3, 4, 5];

let numbers2 = numbers1;

numbers2.push(6);

const evens = numbers1.filter((num) => num % 2 === 0);

const squares = numbers1.map((num) => num * num);

function printItemsTwice(items) {
  for (const item of items) {
    console.log(item);
  }
  items.forEach((item) => console.log(item));
}

printItemsTwice(evens);

// array destructuring

const [first, second] = evens;

// remove "unused variable" warnigns
console.log(name, age, myname, myage, evens, squares, first, second);
