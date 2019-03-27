const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

console.log(sort(arr));

function sort(arr) {
  return [].concat(...arr).sort((a, b) => b - a);
}

