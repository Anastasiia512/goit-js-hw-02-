"use strict";
let input;
let total = 0;

do {
  input = prompt("Введите число!");
  const numbers = [];
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз!");
      continue;
    }
  }
  numbers.push(Number(input));
  for (const number of numbers) {
    total += number;
  }
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
