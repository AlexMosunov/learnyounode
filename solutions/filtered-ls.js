/*
var fs = require('fs');
var path= require ('path');
fs.readdir(process.argv[2], function(err, data){
	if (err) throw err;
	data.forEach(function (filename){
		if (path.extname(filename)=== '.'+process.argv[3]){
			console.log(filename);
		}
	})

})
*/

const fs = require("fs");
const path = require ('path');
const extension = process.argv[3];

fs.readdir(process.argv[2],(err, items) => {
    if (err) console.log(err);
    //let aaa = items.find((ext => ext == extension));
    items.forEach(e => {
        if (path.extname(e).slice(1) == extension) console.log(e);
    });
    //if (aaa == extension) console.log()
});

/*
  'use strict'
    const fs = require('fs')
    const path = require('path')
    
    const folder = process.argv[2]
    const ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })




*/

