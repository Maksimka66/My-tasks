import { aclean, unique } from "./learnJS/Map and Set/mapAndSet.js";
import bubbleSort from "./tasks/bubbleSort/bubbleSort.solution.js";
import sum from "./tasks/sum/solution.js";
import isUnique from "./tasks/uniqueElements/uniqueElements.solution.js";

// sum(5, 7);
// sum(-5, 2);

let array = [53, 71, 26, 13, 4, 7];
// let sortedArray = bubbleSort(array);
// console.log({ array, sortedArray });

// array = [0, 42, 5, 1];
// sortedArray = bubbleSort(array);
// console.log({ array, sortedArray });

// array = [13, 2, 80, 17];
// sortedArray = bubbleSort(array);
// console.log({ array, sortedArray });

// array = [56, 24, 71, 32];
// sortedArray = bubbleSort(array);
// console.log({ array, sortedArray });

// let isUniqueArray = [22, 75, 58, 22];

// let checkedArray = isUnique(isUniqueArray);

// console.log(checkedArray);

// isUniqueArray = [25, 13, 6, 14, 13, 65, 25, 71];

// checkedArray = isUnique(isUniqueArray);

// console.log(checkedArray);

// isUniqueArray = [53, 71, 26, 13, 4, 7];

// checkedArray = isUnique(isUniqueArray);

// console.log(checkedArray);

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

console.log(unique(values));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
