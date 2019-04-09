console.log(forsage(80, 100, 40)); // [2, 0, 0]
console.log(forsage(547, 651, 123)); // [ 1, 10, 57 ]
console.log(forsage(710, 792, 70)); // [ 0, 51, 13 ]
console.log(forsage(405, 507, 66)); // [ 0, 38, 49 ]
console.log(forsage(264, 314, 126)); // [ 2, 31, 12 ]

function forsage(speedA, speedB, distance) {
  const raceTime = distance / (speedB - speedA);
  const time = [];
  const hours = Math.trunc(raceTime);
  time.push(hours);
  const minutes = Math.trunc((raceTime - hours) * 60);
  time.push(minutes);
  const seconds = Math.trunc(((raceTime - hours) * 60 - minutes) * 60);
  time.push(seconds);
  return time;
}
