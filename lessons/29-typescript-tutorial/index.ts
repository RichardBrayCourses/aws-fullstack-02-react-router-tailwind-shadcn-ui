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
type Locator = number | string | Person;

function printLocator(locator: Locator) {
  console.log(locator);
}

printLocator(42);
printLocator("alice");
printLocator(alice);

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
let root2 = root(-9);

// ====================
// GENERIC FUNCTIONS
// ====================

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(123);
const str = identity<string>("hello");

function pair<T>(item1: T, item2: T): T[] {
  return [item1, item2];
}

const together = pair(12, 13);

// ====================
// INTERFACES
// ====================

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let bonzo: Dog;
bonzo = { name: "Bonzo", breed: "Doo-Dah" };

// ==============================
//  NULL CHECKING NULLABLE VALUES
// ==============================

const x = root(10);
if (!x) throw Error("unexpected value for x");

square(x);

// ===================================
//  NULL CHECKING OPTIONAL PROPERTIES
// ===================================

let accumulator: number = 0;

if (alice.age) accumulator += alice.age;
