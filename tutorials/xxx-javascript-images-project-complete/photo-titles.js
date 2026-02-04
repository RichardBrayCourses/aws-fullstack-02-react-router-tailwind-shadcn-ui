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
  i = 0;
  while (i < people.length) {
    console.log(people[i]);
    i = i + 1;
  }
}

printPeople(myFriends);

function makePerson() {
  const age = Math.trunc(Math.random() * 100);
  const nameIndex = Math.trunc(Math.random() * people.length);

  return {
    name: myFriends[nameIndex],
    age: age,
  };
}

const newPerson = printPerson(makePerson());

const { age, name } = makePerson();

console.log(age);
console.log(name);

const threePeople = [firstPerson, secondPerson];

console.log(threePeople[0]);
console.log(threePeople[1]);

function makeThreePeople() {
  return [makePerson(), makePerson(), makePerson()];
}
for (let i = 0; i < 3; i++) {
  console.log(person[i]);
}

const [fred, bruce] = threePeople;

const photos = [
  {
    premium: true,
    downloads: 1247,
    title: "Misty Forest",
    description: "Soft light over a quiet evergreen canopy.",
  },
  {
    premium: false,
    downloads: 343,
    title: "Mountain Trail",
    description: "A winding path through alpine terrain.",
  },
  {
    premium: true,
    downloads: 55,
    title: "City Glow",
    description: "Evening light across a lively skyline.",
  },
  {
    premium: true,
    downloads: 33432,
    title: "Desert Lines",
    description: "Warm dunes shaped by the wind.",
  },
  {
    premium: true,
    downloads: 333,
    title: "Ocean Cliff",
    description: "Waves rolling into rugged coastline.",
  },
  {
    premium: true,
    downloads: 343,
    title: "Golden Field",
    description: "Late sun over a wide open meadow.",
  },
];

/**
 * Returns photos filtered by title OR description containing filterText (case-insensitive).
 * Pure function: does not mutate photos.
 * @param {string} filterText
 * @returns {Array}
 */
export function getPhotos(filterText = "") {
  const needle = filterText.trim().toLowerCase();

  if (!needle) return photos.slice(); // return a copy

  return photos.filter(
    (p) =>
      p.title.toLowerCase().includes(needle) ||
      p.description.toLowerCase().includes(needle),
  );
}
