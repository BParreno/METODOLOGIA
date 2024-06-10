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
    if (i === 2) {
      let mult = numbers[i] *3;
    alert (mult);
    };
  };
};
multForThree(numbers)