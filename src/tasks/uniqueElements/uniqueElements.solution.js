export default function isUnique(array) {
  let uniqueElemsArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        uniqueElemsArray = array.filter((_, index) => index === j);
      }
    }
  }

  return uniqueElemsArray;
}
