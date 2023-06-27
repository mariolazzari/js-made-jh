const nums = [10, -20, 30, -40, 50];
let nums10 = nums.map(num => num * 10);
console.log(nums10);

const numsObj = nums.map(num => ({ value: num * 10 }));
console.log(numsObj);

const pos10 = nums.filter(num => num > 0).map(num => num * 10);
console.log(pos10);

const people = [
  { firstName: "Mario", lastName: "Lazzari" },
  { firstName: "Mariarosa", lastName: "Sbardellati" },
].map(person => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
}));
console.log(people);

const clone = obj => JSON.parse(JSON.stringify(obj));
const clones = people.map(person => clone(person));
console.log("Clones:", clones);

// Array from
nums10 = Array.from(nums, n => n * 10);
console.log("Array from:", nums10);
