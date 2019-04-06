console.log(parse('iiisxxxdoso'));// [ 8, 64 ]
console.log(parse('84oiissgldo'));// [ 8, 64 ]
console.log(parse('ddododoisio'));// [ 8, 64 ]

function parse(str) {
  return [...str].reduce((acc, value) => getRule(value)(acc), [0]).slice(0, -1);
}

function getRule(symbol) {
  const SYMBOLS = {
    'i': increment,
    'd': decrement,
    's': square,
    'o': supplementation,
    'default': (array) => array
  };
  return SYMBOLS[symbol] || SYMBOLS['default'];
}

function increment(array) {
  array[array.length - 1]++;
  return array;
}

function decrement(array) {
  array[array.length - 1]--;
  return array;
}

function square(array) {
  array[array.length - 1] = array[array.length - 1] ** 2;
  return array;
}

function supplementation(array) {
  array.push(array[array.length - 1]);
  return array;
}

