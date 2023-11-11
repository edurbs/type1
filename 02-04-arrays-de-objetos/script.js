let person1 = {
  name: "eduardo",
  age: 40
}

let person2 = {
  name: "Maria",
  age: 30
}

let person3 = {
  name: "Joao",
  age: 20
}

let list = [person1, person2, person3]
show()

list.push({name: "Clarice", age: 15})

show()

function show(){
  for (const person of list){
    console.log(person.name)
  }
  console.log('--------')
}