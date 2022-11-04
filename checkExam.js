/*

El primer input array es la respuesta correcta a un examen, como ['a', 'a', 'b', 'd']. El segundo contiene las respuestas enviadas por un estudiante.

Los dos arrays no están vacíos y tienen la misma longitud. Retorna la puntuación de este array de respuestas, dando un +4 por cada respuesta correcta, un -1 por cada respuesta incorrecta, y un +0 por cada respuesta en blanco, representado en un string vacío

Si el resultado es menor a 0, entonces que retorne 0.

Por ejemplo:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

function checkExam(array1, array2) {
    let score = 0;
    
    if(array1.length !== array2.length){
        return "No tienen la misma cantidad de respuestas."
    };

    for (let i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
            score += 4;
        } else if (array2[i] === "" || array2[i] === '') {
            score += 0;
        } else {
            score -= 1
        }
    };
    
    if(score < 0){
        score = 0
    };

    return score
    
};

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));