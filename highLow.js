/*

Se te da un string de números separados por un espacio entre sí, y tenés que retornar el valor más alto y el más bajo.

Por ejemplo:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

El string retornado debe ser 2 números separados por un solo espacio, y el número más alto es el primero.

*/

function highAndLow(numbers){
    let fullArray = numbers.split(' ');
    let numberArray = fullArray.map(number => parseInt(number));
    let high = Math.max(...numberArray);
    let low = Math.min(...numberArray);
    return high + ' ' + low;
};

console.log(highAndLow("1 -2 54 4 5"));