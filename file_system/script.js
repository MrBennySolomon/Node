const fs = require('fs');

//1 fs.writeFileSync('new.txt', '1. Create a new txt file using the same fs module method we have learned before.');
//2 fs.copyFileSync('new.txt', 'newCopy.txt');
//3 fs.renameSync('newCopy.txt', 'newRenamedCopy.txt');
//4 fs.readdir('.', (err, data) => console.log('data: ', data));
const data = fs.readFileSync('new.txt', 'utf-8');
const digitAndSymbolsCount = data.split('').reduce((accum, curr) => {
  if (accum.hasOwnProperty(curr)) accum[curr] = Number(accum[curr]) + 1;
  else  accum[curr] = 1;
  return accum;
}, {});

console.log('count digits and symbols: ',digitAndSymbolsCount);