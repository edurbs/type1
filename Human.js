
class Animal {
  sex
  constructor (sex){
    this.sex = sex
  }
}

class Human extends Animal {
  hungry = true
  name
  age

  constructor(name, age, sex){
    super(sex)
    this.name = name
    this.age = age
  }

  eat(){
    this.hungry=false
  }
}


const person1 = new Human('Eduardo', 40, 'M');

console.log(person1)
