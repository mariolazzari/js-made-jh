const names = ["Mario", "Mariarosa", "Maria", "Roberto", "Mario", "Mario"];

const findMario = names.find(name => name === "Mario");
console.log("Found:", findMario);

// objs
const people = [{ name: "Mario" }, { name: "Mariarosa" }];
const mary = people.find(person => person.name === "Mariarosa");
console.log("Found:", mary.name);

const nums = [10, 20.3];

console.log("Includes 10:", nums.includes(10));

console.log(
  "Some 10:",
  nums.some(num => num === 10)
);

console.log(
  "Every 10:",
  nums.every(num => num === 10)
);
