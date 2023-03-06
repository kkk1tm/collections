let elems = document.querySelectorAll('p');
let arr = [];

for (let elem of elems) {
	arr.push(elem);
}
arr = [...elems];
arr = Array.from(elems);
console.log(arr);