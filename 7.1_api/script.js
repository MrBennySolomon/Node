import axios from 'axios';

import request from 'request';



//1
// const data = async () => {
//   try {
//     const info = await axios.get('https://users-be4a5-default-rtdb.europe-west1.firebasedatabase.app/users.json');
//     return info.data;
//   }catch(err) {
//     throw new Error('fetch data went wrong...');
//   }
// }
// console.log(await data());

//2
// request('https://users-be4a5-default-rtdb.europe-west1.firebasedatabase.app/users.json', (error, response, body)=>{
//     console.log(body);
// });

//3
import fetch from 'node-fetch';

const response = await fetch('https://users-be4a5-default-rtdb.europe-west1.firebasedatabase.app/users.json');
const body = await response.text();

console.log(body);