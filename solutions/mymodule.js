
/*
const fs = require('fs');
const path = require('path');

module.exports= (dirpath, extension, callback) => {
	let filteredfiles = [];
	fs.readdir(dirpath, (err, list) => {
		if ( err ) return callback(err);
		list.forEach(file => {
			if ( path.extname(file)=== '.'+ extension){
				filteredfiles.push(file);
			}
		})
		callback(null, filteredfiles);
	})
}
*/

'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

