'use strict'
//Ejercicio #1
function filterAndRound(nums) {
    return nums
      .filter(num => num > 10.00)
      .map(num => num.toFixed(2));
  }

//Ejercicio #2
let classes = [
    { name: 'Metodologia', level: 1 },
    { name: 'Interfacez', level: 1 },
    { name: 'TICS', level: 1 },
    { name: 'Base de Datos', level: 1 },
    { name: 'Matematicas', level: 1 },
    { name: 'PIENSA', level: 1 },
  ];
  
  function filterLevel(classes, level) {
    return classes.filter(classes => classes.level === level);
  }
  
  //Ejercicio #3
  function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    let average = sum / scores.length;
    return average | 0;
  }
  
  let scores = [85, 90, 78, 92, 88];
  let integerAverage = calculateAverage(scores);
  