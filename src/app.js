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

array = [22, 75, 58, 22];

isUnique(array);

array = [25, 13, 6, 14, 13, 65, 25, 71];

console.log(isUnique(array));
