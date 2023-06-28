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

const groups = [
  [3, 2],
  [2, 5],
  [3, 7],
];

// [2,2,2,5,5,7,7,7]

groups.reduce((arr, [count, value]) => {
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}, []);

const groupped = groups.reduce(
  (arr, [count, value]) => [...arr, ...Array(count).fill(value)],
  []
);
console.log(groupped);
