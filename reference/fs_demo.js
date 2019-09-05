const fs = require('fs');
const path = require('path');

// Create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created');
});


// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Aziz Ali', err => {
  if (err) throw err;
  console.log('File created and written to..');
});

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
  'Overwriting!',
  err => {
  if (err) throw err;
  console.log('File written to..');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
  ', you are awesome',
  err => {
  if (err) throw err;
  console.log('Appending to File written to..');
});
*/
/*
// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'), err => {
  if (err) throw err;
  console.log('File renamed!');
});
