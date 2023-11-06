//console.log(process)
//console.log(process.argv)
//console.log(process.env)

const os = require('os');
// https://nodejs.org/api/os.html

const path = require('path');
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths

const fs = require('fs').promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.length, data[0], data);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

async function createFile(name, data) {
  try { 
      await fs.appendFile(name, data, { flag: 'w' });
      console.log(`Appended data to ${name}`); 
    } catch (error) { 
      console.error(`Got an error trying to append the file: ${error.message}`); 
    } 
}

// console.time('bunch-of-stuff');
// console.timeEnd('bunch-of-stuff');

//readFile('1111.jpg');

//createFile('test.txt', 'A some text was added here')

// require('dotenv').config();
// https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs