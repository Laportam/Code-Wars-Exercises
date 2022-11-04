/*

Armá una función para que clasifique el array de números. Si en la función se pone un array vacío o nulo, entonces la función debería devolver el array vacío.

solution([1, 2, 10, 50, 5]); // return [1,2,5,10,50]
solution(null); // return []

*/

function solution(nums){
    if(nums === null){
        return [];
    } else {
        return nums.sort((a,b) => {
            return a - b;
        });
    };
};

console.log(solution([1, 2, 10, 50, 5]))