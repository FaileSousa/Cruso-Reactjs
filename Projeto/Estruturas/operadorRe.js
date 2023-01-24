function minhaLista(...nomes) {
    console.log(nomes)
}

minhaLista("Mahtues", "Lucas", "João","José", "Maria")

function listaNumeros(...numeros) {
    console.log(numeros)
}

listaNumeros(1, 2 ,3, 4, 5)

function cadastrar(usuarios, ...novoUsuarios){
    let totalUsusarios = [
        ...usuarios,
        ...novoUsuarios
    ]
    console.log(totalUsusarios)
}

let usuarios = [ "Matheus", "João"]

let novoUsuarios = cadastrar(usuarios, "Henrique", "Lucas")