const nums = [10, -20, 30, -40, 50];
const pos = nums.filter(num => num >= 0);
const neg = nums.filter(num => num < 0);
console.log(pos, neg);

// chaining
const pos50 = nums.filter(num => num > 0).filter(num => num >= 50);
console.log(">=50:", pos50);

// obj
const people = ["Mario", "Jerry", "john"];
const jNames = people.filter(name => name[0].toLowerCase() === "j");
console.log("J names:", jNames);
