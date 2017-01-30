var fs = require('fs'); //loading the module
var fileContents = fs.readFileSync(process.argv[2]);
var StringifiedContents = fileContents.toString();
var splittedConetnt = StringifiedContents.split('\n');
console.log(splittedConetnt.slice(1).length);