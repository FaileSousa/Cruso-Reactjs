

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
            cargo: 'Programador',
            status: 1,
            codigo: '123456'
    }
    return novosDados
}

console.log(cadastroPessoa({
    nome: 'Faile',
    sobrenome: 'Sousa',
    anoInicio: 2023
}))