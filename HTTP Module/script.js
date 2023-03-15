const https = require('https');

https.get('https://users-be4a5-default-rtdb.europe-west1.firebasedatabase.app/users.json', (response) => {
  let data = '';

  response.on('data', (chunk) => {data += chunk;});

  response.on('end', () => {console.log(data)});

}).on("error", (err) => {console.log('error')});