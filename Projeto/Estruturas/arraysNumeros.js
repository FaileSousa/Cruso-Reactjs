let primeiros = [ 1, 2, 3]
console.log(primeiros)

let numeros = [ ...primeiros, 4, 5, 6]
console.log(numeros)


let pessoa = {
    nome: "Faile",
    idade: 33,
    cargo: "programador"
}
console.log(pessoa)

let novaPessoa = {
    ...pessoa,
    anoAtual: 2022,
    cidade: "São Paulo"
}
console.log(novaPessoa)