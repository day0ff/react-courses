const fruits = {
  apple: {id: 1, name: 'apple', cost: 0.99},
  orange: {id: 2, name: 'orange', cost: 2.15},
  pineapple: {id: 3, name: 'pineapple', cost: 1.69}
};

const apple = {...fruits};

console.log(apple === fruits.apple);