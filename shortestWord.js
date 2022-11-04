/*

Simplemente, dado un string de palabras, que la función retorne la longitud de la/s palabra/s más larga/s.

El string dado no puede estar vacío.

*/

function findShort(s){ 
    let split = s.split(' ').sort((a,b) => {
        return a.length - b.length
    });
    
    return split[0].length
};

console.log(findShort("Bitcoin will take over the world"));