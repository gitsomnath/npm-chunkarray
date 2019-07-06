# This is just create an array of chunk


User Guide with example

npm i npm-chunkarray

const  chunkArray = require('npm-chunkarray')

const testArray = [1,2,4,4,5,65,6,6,7,7,8,8,8,8,89,8]

const myarray = chunkArray(testArray,15)

console.log(myarray);