export default function bubbleSort(arr) {
  const newArr = [...arr];
  let elem;

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1 - i; j++) {
      if (newArr[j] > newArr[j + 1]) {
        elem = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = elem;
      }
    }
  }

  return newArr;
}
