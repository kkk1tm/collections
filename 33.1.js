let map = new Map;

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [1, 9];

map.set(arr1, 'stroka');
map.set(arr2, 'stroka2');
map.set(arr3, 'stroka3');

console.log(map.get(arr1));
console.log(map.get(arr2));
console.log(map.get(arr3));