'use strict';

let numbers = [
    1,
    2,
    3,
    4,
    5,
]

function sumElements(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
let sum = sumElements (numbers);
alert (sum);