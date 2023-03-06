let elems = document.querySelectorAll('input');

let map = new Map;

let i = 1;
for (let elem of elems) {
	map.set(elem, i++);
}

for (let elem of elems) {
	elem.addEventListener('click', function() {
		this.value = this.value + map.get(this);
	});
}