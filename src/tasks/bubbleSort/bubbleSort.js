export default function bubbleSort(arr) {
  const newArr = [];
  let elem;

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        elem = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = elem;
      }
    }
  }

  console.log(arr);

  console.log(newArr);

  return newArr;
}
