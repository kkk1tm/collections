let elems = document.querySelectorAll('input');

let map = new Map;
let inputValue = [];


let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('keyup', function() {
		if (event.keyCode == 13) {
			inputValue.push(this.value);
		}
	});
	elem.onblur = function() {
		console.log(inputValue);
	}
}