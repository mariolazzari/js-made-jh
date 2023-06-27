let arr = [];

// good
for (let i = 0; i < 50; i += 10) {
  // console.log(i);
  arr.push(i);
}

// bad
console.log("for");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in
console.log("for in");
for (const idx in arr) {
  console.log(arr[idx]);
}

// for of
console.log("for of");
for (const el of arr) {
  console.log(el);
}

// for each
console.log("forEach");
arr.forEach(el => {
  console.log(el);
});

// for each index
console.log("forEach index");
arr.forEach((el, idx) => {
  console.log(`Index ${idx}: ${el}`);
});
