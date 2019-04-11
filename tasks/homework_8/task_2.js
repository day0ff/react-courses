const flatMap = require('flatmap');
Array.prototype.flatMap = function (callback) {
  return flatMap(this, callback);
};

console.log(check([[3, 4, 5]])); // [[]]
console.log(check([[3, 4, 5], [3, 4, 5]])); // [[], []]
console.log(check([[5, 6, 8, 4, 7, 7, 1, 7, 7, 7, 8],
  [7, 8, 1, 8, 3, 7, 4, 2, 8, 3, 4],
  [8, 0, 1, 6, 9, 3, 2, 6, 2, 1, 7]]));  // [[5, 6, 8, 4, 1, 8],
                                         // [8, 1, 8, 3, 4, 2, 8, 3, 4],
                                         // [8, 0, 1, 6, 9, 3, 2, 6, 2, 1]]
console.log(check([[]])); // [[]]
console.log(check([])); // []
console.log(check([[8, 1, 6, 7, 4, 1, 8, 7],
  [0, 0, 0, 7, 2, 3, 2, 3, 8, 2, 5],
  [0, 3, 9, 7, 8, 9, 8, 9, 2, 9, 4, 8]])); // [[1, 6, 7, 4, 1, 7],
                                           // [0, 0, 0, 7, 2, 3, 2, 3, 2, 5],
                                           // [0, 3, 9, 7, 9, 9, 2, 9, 4]]

console.log(check([[1, 2], [2, 3], [5, 3], [9, 2],
                  [7, 4], [1, 1], [8, 9], [2, 4], [1,0]])); // [ [], [ 3 ], [ 5, 3 ], [ 9 ],
                                                            // [ 7, 4 ], [], [ 8, 9 ], [ 4 ], [ 0 ] ]

function check(array) {
  const frequencies = array.flatMap(value => value).reduce((acc, value) => {
    acc[value]++;
    return acc;
  }, new Array(10).fill(0));
  const frequency = Math.max(...frequencies);
  return array.map(arr => arr.filter(value => frequencies[value] !== frequency));
}