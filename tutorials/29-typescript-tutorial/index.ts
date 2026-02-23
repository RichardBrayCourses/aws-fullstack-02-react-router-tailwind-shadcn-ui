// ====================
// PRIMITIVE TYPES
// ====================

let firstname: string;
firstname = "fred";

let isActivated = true;

console.log(firstname, isActivated);

// ====================
// DECLARED FUNCTIONS
// ====================

function toggleActivated(value: boolean): boolean {
  return !value;
}

let reversed = toggleActivated(isActivated);

// ====================
// ARROW FUNCTIONS
// ====================

const toggler = (value: boolean): boolean => {
  return !value;
};

let toggled = toggler(isActivated);

// ====================
// INTERFACES
// ====================
interface Student {
  id: number;
  name: string;
  age?: number;
}

let alice: Student;

alice = { id: 1, name: "Alice" };

// ====================
// UNION TYPES
// ====================
type Id = number | string;

function printId(id: Id) {
  console.log(id);
}

printId(42);
printId("abc");

// ====================
// GENERIC FUNCTIONS
// ====================

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(123);
const str = identity<string>("hello");
