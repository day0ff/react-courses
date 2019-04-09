const names = ['Anastasia', 'C Powel', 'Wilfrid Stevens', 'Peter Brien', 'J Steeve', 'Arthur Clarke',
  'Bernard Deltheil', 'R Steell', 'Peter Gone', 'Peter Reeves', 'Roland Scorsini', 'Bernard Povit',
  'Peter Reedgrave', 'Raymond Stevenson', 'E Kustur', 'P McDon', 'Paul Dive', 'F Flanaghan',
  'C Saborn', 'John Freeland', 'Jr Part', 'Pete Highman', 'Arthur Paternos', 'P Reed', 'W Mount',
  'Paulo Divino', 'Sophia Loren', 'W Mount', 'Peter Pan', 'Anna Stevens', 'Laurence Pantow',
  'Peter Crush', 'Ray Charles', 'William Saurin', 'Donald Drinkaw', 'F Fulgur', 'Ray Chandler'];

console.log(findMurder('~~T~~r~pa~e~No', names)); //  Arthur Paternos
console.log(findMurder('~oLA~D~sc~Rs~Ni', names)); //  Roland Scorsini
console.log(findMurder('~~~~~~~~NE', names)); //  Peter Gone
console.log(findMurder('w~MOu~T', names)); //  W Mount, W Mount

console.log(findMurder('~~~~r', names)); //  'Wilfrid Stevens,Peter Brien,Peter Gone,Peter Reeves,
                                          // Peter Reedgrave,Peter Pan,Peter Crush'

function findMurder(str, array) {
  const reg = new RegExp(str.replace(/~/g, '.'), 'i');
  return array.reduce((acc, value) => {
    if (reg.test(value)) acc.push(value);
    return acc;
  }, []);
}
