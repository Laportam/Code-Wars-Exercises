/*

Se te da un array de números enteros de longitud impar, en la que todos ellos son iguales, a excepción de un solo número.

Hay que hacer una función que acepte dicho array y devuelva ese única número diferent.

Por ejemplo:
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
    return numbers.find((number) => numbers.indexOf(number) === numbers.lastIndexOf(number));
};

console.log(stray([1, 1, 2]));