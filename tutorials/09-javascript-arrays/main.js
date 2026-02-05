import { makeButton } from "./button.js";

makeButton();

// arrays

const numbers1 = [1, 2, 3, 4, 5];

let numbers2 = numbers1;

numbers2.push(6);

function print(items) {
  for (const i of items) {
    console.log(i);
  }
}

print(numbers1);

numbers1.forEach((i) => console.log(i));

// array destructuring

const [first, second] = numbers1;

// filter

const lessThanFour = (num) => num < 4;

const evens = numbers1.filter(lessThanFour);

// map

const square = (num) => num * num;
const squares = numbers1.map(square);

// remove "unused variable" warnigns
(evens, squares, first, second);
