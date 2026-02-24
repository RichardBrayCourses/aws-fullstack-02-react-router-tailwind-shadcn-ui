// ====================
// PRIMITIVE TYPES
// ====================

let firstname: string;
firstname = "fred";

let isActivated = true;

console.log(firstname, isActivated);

// ====================
// TYPES
// ====================

type Person = {
  id: number;
  name: string;
  age?: number;
};

let alice: Person;

alice = { id: 1, name: "Alice" };

// ====================
// UNION TYPES
// ====================

type Id = number | string;

let xxx: Id = 42;
let yyy: Id = "abc";

// ====================
// DECLARED FUNCTIONS
// ====================

function square(value: number): number {
  return value * value;
}

let sqr = square(10);

// ====================
// ARROW FUNCTIONS
// ====================

const root = (value: number): number | null => {
  return value >= 0 ? Math.sqrt(value) : null;
};

let root1 = root(9);

// ====================
// GENERIC FUNCTIONS
// ====================

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(123);
const str = identity("hello");

function pair<T>(item1: T, item2: T): T[] {
  return [item1, item2];
}

const together = pair(12, 13);

// ====================
// INTERFACES
// ====================

/*
type Animal = {
  name: string;
}

let pet:Animal;

pet = { name: "Waffles" };

*/

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let bonzo: Dog;
bonzo = { name: "Bonzo", breed: "Doo-Dah" };

// ==============================
//  NULL CHECKING
// ==============================

const answer = root(10);

square(answer);

square(answer!);

square(answer as number);

if (answer !== null) square(answer);

if (answer === null) throw Error("unexpected value for answer");
square(answer);

square(answer ?? 0);

// ===================================
//  UNDEFINED CHECKING
// ===================================

interface Measurement {
  stdDev?: number;
}

let m: Measurement;

m = { stdDev: 2 };

let standardDeviation = m.stdDev;

square(standardDeviation);

square(standardDeviation!);

square(standardDeviation as number);

if (standardDeviation !== undefined) square(standardDeviation);

if (standardDeviation === undefined)
  throw Error("unexpected value for standard deviation");
square(standardDeviation);

square(standardDeviation ?? 0);

// ====================================
//  TYPESCRIPT DECLARATION FILES
// ===================================

import { greet } from "./utility.js";
console.log(greet("TypeScript"));
