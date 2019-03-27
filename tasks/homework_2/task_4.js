class Dictionary {
  constructor(...properties) {
    properties.forEach(property => {
      const [key, value] = [].concat(...Object.entries(property));
      this.newEntry(key, value);
    });
  }

  newEntry(key, value) {
    Object.defineProperty(this, key, {value: value});
  }

  look(key) {
    return this[key]
  }
}

const small = new Dictionary({english: 'английский'}, {spanish: 'испаниский'});
small.newEntry('italian', 'итальянский');
console.log(small.look('english'), small.look('spanish'), small.look('italian'));