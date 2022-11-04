/*

Dado un string, escriba en mayúsculas las letras que ocupan los índices pares y los índices impares por separado, y retorne como se muestra a continuación (el índice 0 se considera par).

Por ejemplo, poner en capitalize('abcdef') debería ser igual a ['AbCdEf', 'aBcDeF'].

El input tiene que ser en minúsculas y sin espacios.

*/

function capitalize(string){
    let finalResult = [];
    let even = "";
    let even2 = string.split('').map((val, idx) => idx % 2 == 0 ? even += val.toUpperCase() : even += val);
    let odd = "";
    let odd2 = string.split('').map((val, idx) => idx % 2 != 0 ? odd += val.toUpperCase() : odd += val);

    finalResult.push(even, odd);

    return finalResult
};

console.log(capitalize("abracadabra"));