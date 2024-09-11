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

// Таска 6. Функція positiveSum приймає масив чисел, а має повернути суму тільки додатніх чисел, які входять в цей масив

function positiveSum(arr) {
  return arr.filter((i) => i > 0).reduce((acc, i) => (acc += i), 0);
}

// Таска 7. Функція solution приймає два рядки та має перевіряти, чи дійсно рядок ending є кінцем рядка str (використання методу endsWith)

const solution = (str, ending) => str.endsWith(ending);

// Таска 8. Функція countSheeps приймає масив та має порахувати кількість овець у ньому. Кожний елемент масиву, який дорівнює true, означає, що вівця на місці.

const countSheeps = (sheep) => sheep.filter((i) => i === true).length;

// Таска 9. Функція validatePIN приймає пін-код, який має бути або 4-значним, або 6-значним, та містити лише цифри

function validatePIN(pin) {
  for (let i = 0; i < pin.length; i++) {
    if (isNaN(parseInt(pin[i]))) {
      return false;
    }
  }

  return pin.length === 4 || pin.length === 6 ? true : false;
}

// Таска 10. Функція binaryArrayToNumber приймає масив нулів та одиниць та має повернути їх представлення у десятковій системі

const binaryArrayToNumber = (arr) => {
  let num = 0;

  arr.reverse().forEach((i, index) => {
    num += i * 2 ** index;
  });

  return num;
};

// Таска 11. Результати матчів нашої команди записуються в колекцію рядків. Кожен матч представлено рядком у форматі «x:y», де x — рахунок нашої команди, а y — рахунок наших суперників. Очки нараховуються за кожен матч таким чином: 1) якщо x > y: 3 бали (перемога) 2) якщо x < y: 0 балів (програш) 3) якщо x = y: 1 бал (рівня). Нам потрібно написати функцію, яка приймає цю колекцію та повертає кількість очок, які наша команда (x) отримала в чемпіонаті за правилами, наведеними вище.

function points(games) {
  let scores = 0;

  games.forEach((i) => {
    switch (true) {
      case i[0] === i[2]:
        scores += 1;
        break;

      case i[0] > i[2]:
        scores += 3;
        break;
    }
  });

  return scores;
}
