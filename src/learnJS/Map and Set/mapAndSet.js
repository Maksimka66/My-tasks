//task 1

function unique(arr) {
  const set = new Set();
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// task 3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// Нагадування: map.keys() повертає об'єкт, а не масив, тому для коректної роботи методу push() треба, щоб у keys був саме масив!

console.log(map);

keys.push("more");

console.log(keys);
