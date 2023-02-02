const {EventEmitter} = require('events')
const ev = new EventEmitter()

const {inherits} = require('util')

ev.on('saySomething', (message)=>{
  console.log('Eu ouvi você', message)
})

/*ev.once('saySomething', (message)=>{//once dispara uma única vez
  console.log('Eu ouvi você', message)
})*/

ev.emit('saySomething', "Josias")
ev.emit('saySomething', "Camila")

//------------------------

function Character(name){
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new  Character('Chapolin');
chapolin.on('help',()=> console.log(`Eu! o ${chapolin.name} colorado!`))
//quando o evento ouvir 'help' a função será disparada

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')