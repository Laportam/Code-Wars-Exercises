/*

Debe crear una función que, cuando se provea de un triplet, esta retorne el índice del elemento numérico que se encuentra entre los otros 2 elementos.

El input a esta función será un array de 3 números distintos.

Por ejemplo:

gimme([2, 3, 1]) => 0

2 es el número que se encuentra entre 1 y 3, y el índice de 2 en el array es 0.

*/

function gimme (triplet) {
    let newTriplet = [...triplet];
    let sortedTriplet = newTriplet.sort((a,b) => {
        return a - b;
    });
    let number = sortedTriplet[1];
    return triplet.indexOf(number)
    //return triplet.indexOf(sortedTriplet[1]);
};

console.log(gimme([2, 3, 1]));