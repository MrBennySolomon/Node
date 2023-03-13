// 2. How can you enable using the import syntax using node js
// a. you should use .mjs to run the import. exmp:
// import * as fs from "fs";
// fs.writeFileSync("notes.txt", "This file was created by Node.js ");

// 3. Create 3 functions using the export/import syntax.
//const data = require("dotenv")
//import "../../env"
//console.log(data.NAME);

// 3. Give 2 node.js environment variables that are not available when using the import syntax.
//console.log(process.env);
// const PATH = process.env.PATH;
// process.env.PORT = '8080';
// const PORT = process.env.PORT;
// console.log(PATH);
// console.log(PORT);
// 4. Create 3 functions using the export/import syntax
// import { helloWrold, sum, helloName } from "./functions.mjs";

// console.log(helloWrold());

// const sum2 = sum(2, 2);
// console.log(sum2);

// console.log(helloName("Benny"));

// 5. Import the file system module using the import syntax.
// import fs from "fs";
// const msg = fs.readFileSync("./notes.txt", { encoding: "utf8"});
// console.log(msg);

require('dotenv').config();

const {
  NODE_ENV, PORT, HOST
} = process.env;

console.log(NODE_ENV,
            PORT,
            HOST);