/*this
const {readFileSync} = require('fs')
and this two lines is the same thing
const fs = require('fs')
fs.readFileSync */

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
//console.log(first , '-----', second)

writeFileSync('./content/result-sync.txt',`the result of combining lol : ${first} , ${second}` ,
{flag:'a'})  //the flag is to add to the file , without it, it will overwrite what's on the file


const testing = readFileSync('./content/result-sync.txt','utf8')
//console.log(testing)
