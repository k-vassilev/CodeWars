function findUniq(arr) {
	arr.sort((a,b)=>a-b);
	return arr[0]==arr[1]?arr.pop():arr[0]
  }

//findUniq([1, 1, 1, 2, 1, 1]) === 2;
findUniq([ 0, 1, 0, 1, 1]);
