//clearTimeout cancela um timeOut

const timeOut = 3000
const finished = () => console.log('done!')

let timer = (setTimeout(finished,timeOut)) //guarda a resposta do timeOut
console.log(timer)
clearTimeout(timer) //cancela o timeOut
console.log(timer)