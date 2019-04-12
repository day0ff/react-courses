const rows = [ [ 'service', 'gmail' ],
  [ 'port', '587' ],
  [ 'user', 'test.mail.accaunt.19@gmail.com' ],
  [ 'password', 'zest19TMAgl' ],
  [ 'from', 'Forms validation service.' ] ];
const obj = rows.reduce((acc,val)=>{acc[val[0]] = val[1]; return acc},{});
console.log(obj);