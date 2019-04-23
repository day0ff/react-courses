console.log(encrypt("Simple text")); // "Sml etipetx"
console.log(encrypt("All that glitters is not gold")); // "Alta ltesi o odl htgitr sntgl"
console.log(encrypt("The better part of valor is discretion")); // "Tebte ato ao sdsrtoh etrpr fvlri icein"
console.log(encrypt("Conscience does make cowards of us all")); // "Cncec osmk oad fu losinede aecwrso sal"

function encrypt(str) {
  return str.split('').reduce((acc, value, index) => {
    acc[index % 2] += value;
    return acc;
  }, ['', '']).join('');
}