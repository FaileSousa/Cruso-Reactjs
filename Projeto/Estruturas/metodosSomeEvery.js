let nomes = ['Matheus', 'Lucas', 'Henrique', 'Maria']

console.log(nomes.some(nomes => nomes === 'Matheus'))

listaNomes = [
    { nome: 'Matheus', idade: 18},
    { nome: 'Maria', idade: 25},
    { nome: 'Henrique', idade: 15}
]

console.log(listaNomes.every(nome => nome.idade >= 18))

if(listaNomes.every(nome => nome.idade >= 18)) {
    console.log('TODOS SÃO MAIORES DE 18')
} else {
    console.log('OPS ALGUEM É DE MENOR')
}