"use strict"
var fs = require('fs');

function readTextFile(file)
{
  fs.readFile(file, "utf8", function (error, data) {
    console.log(data);
    });
}

let hash = readTextFile('./commitHash.txt')
console.log(hash)
