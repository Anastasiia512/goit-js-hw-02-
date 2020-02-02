"use strict";
let input;
const numbers = [];

do {
  input = prompt("Введите число!");
  if (input !== null) {
    if (Number.isNaN(Number(input))) {
      alert("Было введено не число, попробуйте еще раз!");
      continue;
    }
  }
  numbers.push(Number(input));
} while (input !== null);

let total = 0;
for (const number of numbers) {
  if (numbers.length !== 0) {
    total += number;
  }
}
console.log(`Общая сумма чисел равна ${total}`);
