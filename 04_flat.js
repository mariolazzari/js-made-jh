const nums = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

const flats = nums.flat();
console.log("Flats:", flats);

const arr = [[[[1, 2, 3]]]];
console.log("Level 1", arr.flat(1));
console.log("Level 2", arr.flat(2));
console.log("Level Infinity", arr.flat(Infinity));

// const vals = [10, 20, 30].map((n, idx) => [n, idx]).flat();
const vals = [10, 20, 30].flatMap((n, idx) => [n, idx]).flat();
console.log("vals", vals);

const mult10 = n => n * 10;

const first = [1, 2, 3];
const second = [4, 5, 6];
const all10 = first.concat(second).map(mult10);
console.log("All 10:", all10);

const des = [...first, ...second].map(mult10);
console.log("des::", des);
