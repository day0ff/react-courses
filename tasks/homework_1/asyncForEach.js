console.log('Tick');

const timer = setInterval(() => {
  console.log('Tick');
}, 100);

const waitFor = (ms, num) =>
  new Promise(resolve => setTimeout(() => {
    console.log('async', num);
    resolve({async: num});
  }, ms));

const asyncForEach = async (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = await callback(array[index], index, array);
  }
  return newArray;
};

asyncForEach([1, 2, 3], (num) => {
  return waitFor(500, num);
})
  .then(result => {
    console.log('Done', result);
    clearInterval(timer);
  });