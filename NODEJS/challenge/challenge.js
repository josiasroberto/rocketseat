const getFlagValue = require('./module')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)