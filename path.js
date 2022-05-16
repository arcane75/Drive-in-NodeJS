// console.log(__filename)

const path = require('path')

const currentPath = __filename
// console.log(path)
// console.log(path.basename(currentPath))
// console.log(path.extname(currentPath))
// console.log(path.basename(__dirname))

let pathObj = {
    dir: 'usr/local',
    name: 'testFile',
    ext: '.js',
}
console.log(path.format(pathObj))
//usr/local\testFile.js

console.log(path.isAbsolute(currentPath))
//true
console.log(path.isAbsolute('./math.js'))
//false

//platform(OS,LINUX) independent way te path.join ta make kore dibe
//join=>za za deya thakbe seita niye make kore dibe
console.log(path.join('usr','local','testFile.js'))
//usr\local\testFile.js

//resolve=> proper absolute path make kore
console.log(path.resolve(__dirname,'scripts','test.js'))
//C:\Projects\NodeJS\scripts\test.js

console.log(path.parse(currentPath))
//path.parse eivabe details show korai obj hisabe.
// {
//     root: 'C:\\',
//     dir: 'C:\\Projects\\NodeJS',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }
  