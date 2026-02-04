import { makeButton } from "./button.js";

makeButton();

// array

const friends = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

console.log(friends[0], friends[1]);

// array destructuring

const [friend1, friend2] = friends;
console.log(friend1, friend2);

// array iteration

console.log("====== for of loop =======");
for (const friend of friends) {
  console.log(friend);
}

console.log("===== forEach loop ======");
friends.forEach((friend) => console.log(friend));
