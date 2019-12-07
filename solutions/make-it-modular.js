/*
const mymodule = require ('./mymodule');

const dirPath= process.argv[2];
const extension = process.argv[3];
mymodule(dirPath,extension, function(err, list){
	 if (err) {
    console.log('An error happened when reading ' + dirPath);
    return err;
  }

  list.forEach(function (filename) {
    console.log(filename);
  });
})
*/

'use strict'
    const filterFn = require('./mymodule')
    const dir = process.argv[2]
    const filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })

