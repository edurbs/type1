/* const nomes = ['Joao', 'Maria', 'Francisco']

nomes.forEach(nome => console.log(nome))

const tamanhos = Array.from(nomes, nome => nome.length)
tamanhos.forEach(tamanho => console.log(tamanho))

const capitalizedNames = nomes.map(nome => nome.toUpperCase())
capitalizedNames.forEach(nome => console.log(nome)) */

const alunos = [
  { nome: 'eduardo', nota: 10 },
  { nome: 'maria', nota: 5 },
  { nome: 'joao', nota: 6 },
  { nome: 'clarice', nota: 4 }
]
const aprovados = alunos.filter(aluno => aluno.nota > 5)
aprovados.forEach(aluno => console.log(aluno.nome))

const total = alunos.reduce((previous, current) => {
  return previous + current.nota
}, 0)
const media = total/alunos.length
console.log(`A média de notas é ${media}`)

const search = 'eduardo'
const nota = alunos.find(aluno => aluno.nome === search ).nota
console.log(`A nota do ${search} foi de ${nota}`)

const corte = 2
const todosAcimaDaNotaDeCorte = alunos.every(nome => nome.nota >= corte)
console.log(todosAcimaDaNotaDeCorte)

const notaMaxima = 10
const alguemComNotaMaxima = alunos.some(nome => nome.nota === notaMaxima)
console.log(alguemComNotaMaxima)
