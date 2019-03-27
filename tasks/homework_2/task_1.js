Object.prototype.create = function (proto, properties) {
  if (proto && typeof proto === 'object') {
    const newObject = {...proto};
    Object.defineProperties(newObject, ...properties);
    return newObject;
  }
  else {
    throw new TypeError('Prototype not defined or properties are empty.');
  }
};

const citizen = {
  sleep: function () {
    return "zzZ...";
  },
  panic: function () {
    return "AaAaAaAa!";
  }
};


const veteran = Object.create(citizen, {
  'panic': {
    value: function () {
      return "SNAFU";
    }
  },
  'wakeUp': {
    value: function () {
      return "One minute, please!";
    }
  }
});

console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
console.log(veteran.sleep()); // zzZ...
console.log(veteran.panic()); // SNAFU
console.log(veteran.wakeUp()); // One minute, please!

const commander = [];
const major = Object.create(commander, {
  command: {
    value: function () {
      return 'Wake up, soldier!';
    }
  }
});
console.log(major.command()); // 'Wake up, soldier!'
