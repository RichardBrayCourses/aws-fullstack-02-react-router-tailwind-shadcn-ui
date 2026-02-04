import { makeButton } from "./button.js";

makeButton();
// objects
const firstPerson = {
  name: "fred",
  age: 17,
};

function printPerson(person) {
  console.log(person.age);
  console.log(person.name);
}

printPerson(firstPerson);

console.log(firstPerson);

// array

const myFriends = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

console.log(myFriends[0]);
console.log(myFriends[1]);

function printPeople(people) {
  let i = 0;
  while (i < people.length) {
    console.log(people[i]);
    i = i + 1;
  }
}

printPeople(myFriends);

// function to return an object

function makePerson() {
  const age = Math.trunc(Math.random() * 100);
  const nameIndex = Math.trunc(Math.random() * myFriends.length);

  return {
    name: myFriends[nameIndex],
    age: age,
  };
}

console.log(makePerson());

// destructuring syntax
const { name, age } = makePerson();
console.log(name);
console.log(age);

// function to return an array

function makeCouple() {
  return [makePerson(), makePerson()];
}

const [person1, person2] = makeCouple();
console.log(person1);
console.log(person2);
