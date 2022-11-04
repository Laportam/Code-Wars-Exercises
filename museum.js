// Remove the minimum

/*

Un museo de cosas increíbles y aburridas quiere deshacerse de algunas exposiciones. Miriam, arquitecta de interiores, idea un plan para eliminar las exposiciones más aburridas. Ella les da una calificación y luego elimina el que tiene la calificación más baja.

Sin embargo, justo cuando terminó de calificar todas las exhibiciones, se dirige a una feria importante, por lo que nos pide que escribamos un código que le diga las calificaciones de los elementos después de que uno eliminó el más bajo.

Tarea:

Dado un array de números enteros, hay que remover el valor más pequeño. No hay que cambiar/mutar el array/lista original. Si hay varios elementos con el mismo valor, hay que eliminar el que tenga el índice más bajo. Si nos dan un array/lista vacío, hay que devolver un array/lista vacío. 

No hay que cambiar el orden de los elementos que quedan.

Ejemplos:
Input = [1,2,3,4,5] -- Output = [2,3,4,5]
Input = [5,3,2,1,4] -- Output = [5,3,2,4]
Input = [2,2,1,2,1] -- Output = [2,2,2,1]

*/

function removeSmallest(numbers) {
    let lowest = Math.min(...numbers);
    let lowestIndex = numbers.indexOf(lowest);
    numbers.splice(lowestIndex, 1);
    return numbers;
};

console.log(removeSmallest([5,3,2,1,4]));