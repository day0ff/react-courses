console.log(getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20')); // Range: 11|57|34 Average: 07|29|03 Median: 10|16|16
console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00')); // Range: 11|04|40 Average: 03|04|57 Median: 01|47|16
console.log(getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16')); // Range: 11|01|49 Average: 07|05|58 Median: 09|22|34
console.log(getStatistic('00|19|34, 02|17|20, 2|47|16')); // Range: 02|27|42 Average: 01|48|03 Median: 02|17|20

function getStatistic(str) {
  const participants = str.replace(' ', '').split(',').map(toSeconds);
  return `Range: ${toFormat(range(participants))} Average: ${toFormat(average(participants))} Median: ${toFormat(median(participants))}`;
}

function toSeconds(str) {
  return str.split('|').reduce((acc, value) => acc * 60 + +value, 0);
}

function toFormat(seconds) {
  const hours = Math.trunc(seconds / 3600);
  const minutes = Math.trunc((seconds - hours * 3600) / 60);
  const sec = seconds - hours * 3600 - minutes * 60;
  return `${addZero(hours)}|${addZero(minutes)}|${addZero(sec)}`;
}

function addZero(number) {
  return ('0' + number).slice(-2)
}

function range(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return max - min;
}

function average(array) {
  return Math.trunc(array.reduce((acc, value) => acc + value, 0) / array.length);
}

function median(array) {
  array.sort((a, b) => a - b);
  const integerPart = Math.trunc(array.length / 2);
  return array.length % 2 ? array[integerPart] : Math.trunc((array[integerPart - 1] + array[integerPart]) / 2);
}