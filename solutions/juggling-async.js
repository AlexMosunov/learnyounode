/*
const http = require('http')
const bl = require('bl')
const urls = [process.argv[2], process.argv[3], process.argv[4]]


urls.forEach(el => {
    http.get(el, (response) => {
        response.pipe(bl((err, data) => {
            if (err) console.error(err);
            console.log(data.toString());
        }))
    })
})
*/

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err)

			results[index] = data.toString()
			count++

			if (count == 3)
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i)