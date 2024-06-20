'use strict';

let array = [0, 2, 4, 8];

//Ejercicio #2
function mostrarPatrones() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let result = array[i] + "" + array[j];
      alert(result);
    }
  }
}

mostrarPatrones();


//Ejercicio #3
function mostrarPatrones() {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let result = array[i] + "" + array[j];
      alert(result);
    }
  }
}

mostrarPatrones();

