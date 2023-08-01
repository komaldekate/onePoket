const fs = require('fs');

const count = (file, callback)=> {

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    const wordArray = data.trim().split(/\s+/);
    const wordCount = wordArray.length;
    callback(null, wordCount);
  });
}

const filename = 'data.txt';

count(file, (err, wordCount) => {
  if (err) {
    console.error('Error reading the file:', err.message);
  } else {
    console.log('Total word count:', wordCount);
  }
});
