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

// remove "unused variable" warnigns
(name, age, myname, myage, evens, squares, first, second);
