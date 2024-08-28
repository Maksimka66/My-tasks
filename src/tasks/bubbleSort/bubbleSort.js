export default function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log("Нужен массив чисел!");
      return;
    }

    if (arr[i] <= arr[i + 1]) {
      arr[i] = arr[i];
      arr[i + 1] = arr[i + 1];
    } else {
      arr[i] = arr[i + 1];
      arr[i + 1] = arr[i];
    }
  }

  console.log(arr);

  return arr;
}
