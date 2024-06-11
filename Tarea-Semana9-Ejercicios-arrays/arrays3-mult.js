'use strict';

let numbers = [
  1,
  2,
  3,
  4,
  5,
];

function multForThree(numbers) {
  for (let i = 0; i < numbers.length; i++) {
  let mult = numbers[i] *3;
    alert (numbers[i] + "x3=" + mult);
    };
  };
multForThree(numbers)