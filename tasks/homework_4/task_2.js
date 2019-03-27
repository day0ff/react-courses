class TopRated {

  constructor(size = 5, players) {
    this.leaderboard = new Array(size).fill('');
    players && this.leaderboard.splice(0, players.length, ...players.slice(0, size)).sort(TopRated.sort);
  }

  get list() {
    return this.leaderboard.map(leader => leader instanceof Array ? leader.join(':') : '');
  }

  add(player) {
    this.leaderboard.unshift(player);
    this.leaderboard.sort(TopRated.sort);
    this.leaderboard.pop();
    return this;
  }

  static sort(a, b) {
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;
    if (b[0] < a[0]) return 1;
    return 0;
  }

}

const top1 = new TopRated(5, [['Mike', 325], ['David', 499], ['Alya', 280], ['Boris', 17], ['Adam', 280]]);
top1.add(['Abram', 280]);
console.log(top1.list);

class HallOfFame extends TopRated {
  constructor(size) {
    super(size)
  }
}

const top = new HallOfFame();  // размер 5 по умолчанию
top.add(["A", 4]).add(["E", 3]).add(["I", 1]);
console.log(top.list); //--> ["A: 4","E: 3","I: 1","",""] //  <-- 2 "пустых игрока" в конце списка
top.add(["S", 5]).add(["T", 7]);
console.log(top.list); // --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]
