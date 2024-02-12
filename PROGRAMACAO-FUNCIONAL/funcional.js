//funções indepedentes
const random = (number, Math) => 
//Math deve ser passado como argumento para não depender de API externa
  Math.floor(Math.random() * number);

//recursive
//Find factorial of a number
const factorial = x => {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

//funções puras

  //exemplos de impuras
  //exemplo 1: está dependendo de um dado externo
  //que não foi passado como parâmetro
  function calculateCircumference(radius){
    return Math.PI * (radius + radius)
  }
  //---------

  //exemplo 2: está alterando um dado externo
  let person = {
    name: 'Elvis Presley',
    age: 'jovem'
  }

  function changeName(name){
    person.name = name
  }

//função pura

//exemplo 1
const calculateCircumference = function (pi, radius){
  return pi * (radius + radius)
}
//com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

//exemplo 2
const changePersonName = (person, name) => ({...person, name})

//first-class function
const sayMyName = () => console.log('Josias')
const runFunction = fn => fn()

runFunction(sayMyname)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))

//Higher-order functions
  //funções que recebem funções como argumento
  //funço~es que poderão retornar outras funções
  
  //exemplo com .map()
  const numbers = [2, 4, 8, 16]

  const square = n => n * n

  const squaredNumber = numbers.map(square)

  //Exemplo de um retorno de função
  //(currying ou aplicação parcial de função)
  const pause = wait => fn => setTimeout(fn, wait)

  pause(600)(() => console.log('waiting 600ms') )

  const wait200 = pause(200)
  const wait1000 = pause(1000)

  wait200(() => console.log('waiting 200ms'))
  wait1000(() => console.log('waiting 1000ms'))


//encadeamento de funções
  const people = ['Rafa', 'Diego', 'Dani', 'Rod']
  const upperCasePeopleThatStartsWithD = people
  .filter(person => person.starsWith('D'))
  .map(dperson => dperson.toUpperCase())
  
