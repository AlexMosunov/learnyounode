const fs = require('fs');

const filesBuf = fs.readFileSync(process.argv[2]);

const numOfStr = filesBuf.toString().split('\n').length - 1;
console.log(numOfStr);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1