const greeting = (name) => 'Olá '+name
const mayor = (age) => age>17

console.log(greeting('joao'))
console.log(showMayority(19))


function showMayority(age){
  if(mayor(age)){
    console.log("Você é maior de idade")
  }else{
    console.log("Você é de menor")
  }
  return ""
}
