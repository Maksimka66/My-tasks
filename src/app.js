import bubbleSort from "./tasks/bubbleSort/bubbleSort.js";
import sum from "./tasks/sum/solution.js";

// sum(5, 7);
// sum(-5, 2);

let array = [53, 71, 26, 13, 4, 7];
let sortedArray = bubbleSort(array);
console.log(sortedArray);

array = [0, 42, 5, 1];
sortedArray = bubbleSort(array);
console.log(sortedArray);

array = [13, 2, 80, 17];
sortedArray = bubbleSort(array);
console.log(sortedArray);

array = [56, 24, 71, 32];
sortedArray = bubbleSort(array);
console.log(sortedArray);
