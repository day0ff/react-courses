const arr1 = matrixAddition(
  [[1, 2],
    [1, 2]],

  [[2, 3],
    [2, 3]]
);

console.log(arr1);

const arr2 = matrixAddition(
  [[1, 2, 3],
    [3, 2, 1],
    [1, 1, 1]],

  [[2, 2, 1],
    [3, 2, 3],
    [1, 1, 3]]
);

console.log(arr2);

const arr3 = matrixAddition(
  [[1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]],

  [[0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0]]
);

console.log(arr3);

function matrixAddition(inArr1, inArr2) {
  const arr1 = [].concat(...inArr1);
  const arr2 = [].concat(...inArr2);
  const dimension = Math.trunc(Math.sqrt(arr1.length));
  const sumArr = arr1.map((value, index) => value + arr2[index]);
  return new Array(dimension).fill([])
    .map((value, index) => sumArr.slice(index * dimension, index * dimension + dimension));
}

