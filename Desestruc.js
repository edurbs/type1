const person1 = {
  name: 'Eduardo',
  age: 18,
  sex: 'M',
  fones: [
    '1234-4564',
    '9999-9999'
  ],
  hungry: false
}

const {fones} = person1
const [,celular] = fones
console.log(celular)