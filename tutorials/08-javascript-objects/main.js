import { makeButton } from "./button.js";

makeButton();

let num1 = 12;

let num2 = num1;

console.log(num1, num2);

num2 = 20;
console.log(num1, num2);

let obj1 = {
  name: "fred",
  age: 12,
};

let obj2 = obj1;

console.log(obj1, obj2);

obj2.age = 20;

console.log(obj1, obj2);

function printPerson(person) {
  console.log(person);
}

printPerson(obj1);

// destructuring syntax

const { name, age } = obj1;

console.log(name, age);

const { name: myname, age: myage } = obj1;

console.log(myname, myage);
