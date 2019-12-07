/*
var fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);
/// reads file and outputs to the console
*/

/*
///takes data from process.stdin and pipe it to process.stdout
process.stdin.pipe(process.stdout);

*/


/*
///Convert data from `process.stdin` to upper-case data on `process.stdout` using the `through2` module.

const through = require('through2');
const stream = through(write, end);

function write (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}

process.stdin.pipe(stream).pipe(process.stdout);
*/
/*

///Instead of transforming every line as in the previous "TRANSFORM" example, for this challenge, convert even-numbered lines to upper-case and odd-numbered lines to lower-case

const split = require('split');
const through2 = require('through2');
let ind = 0;

process.stdin
    .pipe(split())
    .pipe(through2(function (buf, _, next) {
        var line = buf.toString();
        this.push( ind % 2 === 0 
            ? line.toLowerCase() + "\n" 
            : line.toUpperCase() + "\n"
        );
        ind++;
        next();
    }), function(done) {
        done();
    }).pipe(process.stdout);


    //this.push(line.split('\n').forEach((el, ind) => {
      //  if (ind % 2 === 0) { return line.toUpperCase() 
        //} else { return line.toLowerCase()}
   // }));

var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;
*/
/*
var concat = require('concat-stream');

process.stdin.pipe(concat(function (buffer) {
  process.stdout.write(buffer.toString().split('').reverse().join(''))
}));
*/

/*
var concat = require('concat-stream');
var concatFun = concat(src => {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
})  

process.stdin.pipe(concatFun);
*/
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    fs.createReadStream('file.txt').pipe(res);
});
server.listen(process.argv[2]);
*/

/*
///wrong solution
var http = require('http');
var through = require('through2');


var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req
        .pipe(through(buf => this.queue(buf.toString().toUpperCase())))
        .pipe(res);
        res.end('beep boop\n');
    } else {
        res.end('beep boop\n');
    }
});
server.listen(process.argv[2]);

*/


var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
            // if the request.method is POSt
            if (req.method == 'POST') {
                // pipe the data out of request and perform toUpperCase
                // then from the writable stream created by through
                // to response
                req.pipe(through(function (buf) {
                            this.queue(buf.toString().toUpperCase());
                        })).pipe(res);
                // end the connection or the connection will hang up 
                // unexpectedly
                res.end();
            } else {
                // directly end
                res.end();
            }
        });

server.listen(process.argv[2]);