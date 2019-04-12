const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

const asyncForEach = async (array, callback) => {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray[index] = await callback(array[index], index, array);
  }
  return newArray;
};

const start = async () => {
  const result = await asyncForEach([1, 2, 3], async (num) => {
    await waitFor(500);
    console.log(num);
    return num + ':num';
  });
  console.log('Done', result);
};

start();
