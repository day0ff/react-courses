console.log(deleteDuplicate('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(deleteDuplicate([2, 4, 4, 5, 2, 2, 8])); // [2,4,5,2,8]

function deleteDuplicate(element) {
  const array = Array.isArray(element) ? element : [...element];
  return array.reduce((acc, value) => {
    if (acc[acc.length - 1] !== value) acc.push(value);
    return acc;
  }, []);
}
