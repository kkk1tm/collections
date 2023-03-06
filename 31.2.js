let elems = document.querySelectorAll('p');
let arr = [];

arr = Array.from(elems);
console.log(arr.slice(1, -1));
console.log(arr.length);