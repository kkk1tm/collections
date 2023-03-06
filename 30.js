let elems = document.querySelectorAll('p');
console.log(elems[0]);
console.log(elems.length);
for (let elem of elems) {
	console.log(elem);
}
console.log(Array.isArray(elems));
console.log(elems.slice(1, 3));