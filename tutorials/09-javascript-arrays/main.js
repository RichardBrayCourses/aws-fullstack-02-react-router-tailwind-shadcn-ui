import { makeButton } from "./button.js";

makeButton();

// arrays

const numbers1 = [10, 20, 30, 40, 50];

let numbers2 = numbers1;

numbers2.push(60);

// array destructuring

const [first, second, third] = numbers1;

function printArray(items) {
  for (const i of items) {
    console.log(i);
  }
}

printArray(numbers1);

// FOREACH

const log = (i) => {
  console.log(i);
};

numbers1.forEach(log);

numbers1.forEach((i) => console.log(i));

// FILTER

const under40 = (i) => i < 40;

const u1 = numbers1.filter(under40);

const u2 = numbers1.filter((i) => i < 40);

// MAP

const square = (i) => i * i;

const s1 = numbers1.map(square);

const s2 = numbers1.map((i) => i * i);

// remove "unused variable" warnigns
(s1, s2, u1, u2, first, second, third);
