let nome = "Faile"

// comentario de uma linha 

/*
comnetario 
de 
varias 
linhas
*/


function entrar(){

    let area = document.getElementById('area')
    let texto = prompt('Digite seu nome')

    if(texto == '' || texto == null){
        alert('Você não digitou seu nome!')
        area.innerHTML = 'Bem vindo...'
    } else {
        area.innerHTML = 'Bem vindo ' + texto 
    }    
}


// Segundo metodo

function entrar2() {
    
    let area = document.getElementById('area2')
    let texto = prompt('Digite seu sobrenome')

    area.innerHTML = nome +  " " + texto

}