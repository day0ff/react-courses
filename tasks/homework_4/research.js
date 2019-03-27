class Example {
  constructor(array) {
    this.array = array.sort(Example.sort);
  }

  static sort (a, b) {
    if (b[0] > a[0]) return 1;
    if (b[0] < a[0]) return -1;
    return 0;
  };
}

// function sort(a, b) {
//   return b - a;
// }

const e = new Example([[4], [3], [2], [5], [1]]);

console.log(e.array);