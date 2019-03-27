Array.prototype.zip = function (arr, fn) {
  const lenght = this.length < arr.length ? this.length : arr.length;
  const merge = [];
  for (let index = 0; index < lenght; index++) {
    merge.push(fn(this[index], arr[index]));
  }
  return merge;
};

const a = [1, 2, 3, 4, 5];
const b = ['a', 'b', 'c', 'd', 'e'];

console.log(a.zip(b, (a, b) => a + b));  // ["1a", "2b", "3c", "4d", "5e"]
console.log(b.zip(a, (a, b) => a + b));  // ["a1", "b2", "c3", "d4", "e5"]
console.log(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b));  // ["a97", "b196", "c297", "d400", "e505"]
console.log(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => parseInt(a, 16) + Number(b).toString(16)));  // [ '1061', '11c4', '12129', '13190', '141f9' ]
