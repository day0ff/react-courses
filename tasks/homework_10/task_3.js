const PAIRS = {
  'NORTH': 'SOUTH',
  'SOUTH': 'NORTH',
  'WEST': 'EAST',
  'EAST': 'WEST'
};

console.log(crossDesert(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH'])); // [ 'NORTH' ]
console.log(crossDesert(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH'])); // ['NORTH', 'EAST']
console.log(crossDesert(['NORTH', 'WEST', 'SOUTH', 'EAST'])); //  ['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])); // [ 'WEST' ]

function crossDesert(array) {
  return array.reduce((acc, value) => {
    PAIRS[acc[acc.length-1]] === value ? acc.pop() : acc.push(value);
    return acc;
  }, [])
}