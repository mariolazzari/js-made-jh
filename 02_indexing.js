const nums = [10, 20, 30, 40, 50];

// destructoring
const [first, second, third, ...rest] = nums;
console.log(first, second, third, rest);

// copy
const numsCopy = [...nums];
numsCopy[0] = 666;
console.log(nums, numsCopy);

// reference!
const people = [{ name: "Mario" }, { name: "Mariarosa" }];
const peopleCopy = [...people];
peopleCopy[0].name = "Roby";
console.log(people, peopleCopy);

// index of
const names = ["Mario", "Mariarosa", "Maria", "Roberto", "Mario", "Mario"];

console.time("indexOf");
const marioId = names.indexOf("Mario");
console.log("Mario id:", marioId);
console.timeEnd("indexOf");

const marioId2 = names.indexOf("Mario", 1);
console.log("Mario id:", marioId2);

const marioLast = names.lastIndexOf("Mario");
console.log("Mario last id:", marioLast);

const notFound = names.indexOf("pippo");
console.log(notFound);

// slower
console.time("findIndex");
const findMario = names.findIndex(name => name === "Mario");
console.log("find mario", findMario);
console.timeEnd("findIndex");
