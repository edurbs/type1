const nome: string = "edu"
const age: number = 22
const alive: boolean = true
const contacts: string[] = ['asd', 'asd']
const fones: (string | number)[] = ['asd', 2]

// alias
type Cpf = string;
const cpf: Cpf = '123'

type Rg = string | number
let rg: Rg = 123
rg = '23'

// Enums
type Sex = 'male' | 'female' | undefined
const sex: Sex = "female"


function greet(name: string, age?:number) {
  console.log(`Hello, ${name.toUpperCase}`)
}

greet('Eduardo')
greet('Maria', 90)


type Person = {
  name: string
  age: number
  contacts: string[]
  isAlive?: boolean
}

const person:Person = {
  age: 22,
  name: 'Lucas',
  contacts: [
    'asd',
    'asd'
  ]
}


type AnimalSex =  'male'| 'female'
type HumanOptions =  'Bi' | 'NonBinary'

type HumanSex = AnimalSex | HumanOptions

function setSex(humanSex: HumanSex){
  return humanSex
}

setSex('Bi')
