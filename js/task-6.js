'use strict';

let input;
const numbers = [];
let total = 0;
console.log(numbers);

while (true) {
  input = prompt('Введите число');
  
 
  if (input === null) {for (const number of numbers) { total += number; }; alert(`Общая сумма чисел равна ${total}`); break; }
  else if (Number.isNaN(Number(input))) { alert('Введённое значение не является числом, введите число.'); continue; }
  else { numbers.push(Number(input)); };
};



