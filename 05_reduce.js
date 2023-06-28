const nums = [10, 20, 30, 40, 50];

let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log("Sum:", sum);

let avg = nums.reduce((acc, cur, _, nums) => acc + cur / nums.length, 0);
console.log("Avg", avg);

let names = ["Mario", "Mariarosa", "Maria", "Roberto"];
console.log(
  names.reduce((acc, cur, idx) => `${acc}${idx > 0 ? ", " : ""}${cur}`, "")
);
console.log(names.join(", "));
