function Warrior(name) {
  this.name = name;
  this.health = 100;

  this.strike = function (target, force) {
    target.health = target.health - force * 10 > 0 ? target.health - force * 10 : 0;
    return target.health;
  }

}

const ork = new Warrior('Ork');
const man = new Warrior('Man');

console.log(man.strike(ork, 3));  // ork.health should == 70
console.log(man.health);  // man.health should == 100
console.log(ork.health);  // ork.health should == 70