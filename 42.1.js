function NoDubl(arr) {
	let res = [...new Set(arr)];
	console.log(res);
  }
  let arr = [1, 2, 3, 1, 3, 4];
  console.log(arr);
  NoDubl(arr)