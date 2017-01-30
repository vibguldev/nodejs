var slicedArrayOfArguments = process.argv.slice(2);
var sumOfArguments = slicedArrayOfArguments.reduce((sum, singleNumber) => (sum = sum + Number(singleNumber)),0);

console.log(sumOfArguments);