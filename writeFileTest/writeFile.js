const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is Benny 2.');
fs.appendFileSync('notes.txt', ' APPENDING ...');