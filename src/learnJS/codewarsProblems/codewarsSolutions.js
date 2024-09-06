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
