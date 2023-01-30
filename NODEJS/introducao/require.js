//native modules

//console.log(require('path'))

const path = require('path')

console.log(path.extname(__filename)) //extensão do filename
console.log(path.basename(__filename))
console.log(path.dirname(__filename))

// my modules
const myModule = require('./exports')
console.log(myModule)