// Таска 1. Функція digitize приймає натуральне число, а має віддати масив цифр цього натурального числа у протилежному порядку. Наприклад: 24535 => [5, 3, 5, 4, 2]

function digitize(n) {
  const numsArr = [];

  for (let i = 0; i < n.toString().length; i++) {
    numsArr.push(n.toString()[i]);
  }

  return numsArr.reverse();
}

// Таска 2. Функція findAverage приймає масив чисел і має видати середнє арифметичне всіх елементів

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;

  array.forEach((item) => (sum += item));

  return sum / array.length;
}

// Таска 3. Функція stringToArray приймає рядок та має повертати масив окремих слів, з яких складається цей рядок

function stringToArray(string) {
  return string.split(" ");
}

// Таска 4. Функція noSpace приймає рядок та має повертати цей самий рядок, але без пробілів всередині

function noSpace(x) {
  return x
    .split("")
    .filter((i) => i !== " ")
    .join("");
}

// Таска 5. Функція sum приймає масив чисел та має видавати їх суму

function sum(numbers) {
  "use strict";

  return numbers.reduce((acc, item) => (acc += item), 0);
}

// Таска 5. Функція positiveSum приймає масив чисел, а має повернути суму тільки додатніх чисел, які входять в цей масив

function positiveSum(arr) {
  return arr.filter((i) => i > 0).reduce((acc, i) => (acc += i), 0);
}

// Таска 5.
