//task 1

export function unique(arr) {
  return Array.from(new Set(arr));
}

// task 2

export function aclean(arr) {
  const map = new Map();

  arr.forEach((element) => {
    const sortedElement = element.toLowerCase().split("").sort().join("");

    map.set(sortedElement, element);
  });

  return Array.from(map.values());
}
// task 3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// Нагадування: map.keys() повертає об'єкт, а не масив, тому для коректної роботи методу push() треба, щоб у keys був саме масив!

keys.push("more");
