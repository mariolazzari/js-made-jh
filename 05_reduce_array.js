const numbers = [1, 2, 3, 4, 5];
let arr = [];

for (const num of numbers) {
  arr = [num, ...arr];
}
console.log(arr);

numbers.reduce((arr, num) => [...arr, num], []);
console.log(arr);

numbers.reduceRight((arr, num) => [...arr, num], []);
console.log(arr);
