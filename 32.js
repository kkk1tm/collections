let div = document.querySelector('div');
let p = document.createElement('p');
div.append(p);

let child = document.querySelector('p');  

let nodes = child.childNodes;
for (let node of nodes) {
	console.log(node.textContent);
}

let parent = document.querySelector('p');
let elems = parent.children;

for (let elem of elems) {
	console.log(elem.innerHTML);
}