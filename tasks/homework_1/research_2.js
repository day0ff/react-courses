// get data from object by string instruction
const str0 = 'a.b.c.d[0].e0';
const str1 = 'a.b.c.d[1].e1.f[2]';
const f = {a: {b: {c: {d: [{e0: 'f0'}, {e1: {f: [1, 2, 3]}}]}}}};

function getArrayData(data, arr) {
  if (arr instanceof Array) return arr.map(value => getData(data, value));
  return getData(data, arr);
}

function getData(data, str) {
  const fields = str.split('.');
  const value = fields.shift();
  let result;
  if (value.match(/\[.*\]/g)) {
    const arr = value.split(/\[|]/g);
    result = data[arr[0]][arr[1]];
  } else {
    result = data[value];
  }
  if (fields.length !== 0) return getData(result, fields.join('.'));
  return result;
}

console.log(getData(f, str0));
console.log(getData(f, str1));
console.log(getArrayData(f, [str0, str1]));
console.log(getArrayData(f, str0));
