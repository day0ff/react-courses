console.log(getWave('react')); //  [‘React’, ‘rEact’, ‘reAct’, ‘reaCt’, ‘reacT’]
console.log(getWave('hello world')); // [‘Hello world, ‘hEllo world, ‘heLlo world, ‘helLo world, ‘hellO world’, ‘hello World’, ‘hello wOrld’, ‘hello worLd’, ‘hello worlD’]

function getWave(str) {
  return [...str].map((value, index) => {
    const array = [...str];
    array.splice(index, 1, value.toUpperCase());
    return array.join('');
  });
}
