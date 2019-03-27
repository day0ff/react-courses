class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const misspelled = new Person('Tony', 'Stork');

console.log(misspelled.fullName);

const person1 = {
  firstName: 'Tony',
  lastName: 'Sterk',
  fullName: function () {
    return `${this.lastName} ${this.firstName}`
  }
};

console.log(person1.fullName());

const person2 = {
  firstName: 'Tony',
  lastName: 'Stirk',
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person2.fullName());

const corrected = {
  ...misspelled,
  ...{lastName: 'Stark'}
};

console.log(corrected.fullName());