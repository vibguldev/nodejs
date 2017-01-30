var fs = require('fs'); //loading the module
fs.readFile(process.argv[2], (err, data) => {if (err) throw err;
var StringifiedContents = data.toString();
var splittedConetnt = StringifiedContents.split('\n');
console.log(splittedConetnt.slice(1).length );

});

// var StringifiedContents = data.toString();
// var splittedConetnt = StringifiedContents.split('\n');
// console.log(splittedConetnt.slice(1).length);