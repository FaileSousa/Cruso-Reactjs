
    const pessoa = {
        nome: "Faile",
        sobrenome: "Sousa",
        idade: 33,
        cargo: "Desenvolvedor"
    }

    console.log(pessoa)

    let { nome } = pessoa
    console.log(nome)

    let { sobrenome } = pessoa
    console.log(sobrenome)

    let { idade, cargo } = pessoa
    console.log(idade)
    console.log(cargo)

    let { cargo: programador} = pessoa
    console.log(programador)

    let nomes = ['Ana', 'Silva', 10]

    let { 1:segundonome } = nomes
    console.log(segundonome)

    let { 0:primeronome, 2:idade2 } = nomes
    console.log(idade2)
    console.log(primeronome)
    
    let nomes3 = ['Yoda', 'Noronha', 28]

    let [ nome3, sobrenome3, idade3] = nomes3
    console.log(nome3)
    console.log(sobrenome3)
    console.log(idade3)