function adicionarCaracter(caracter){
    let valorInput = document.querySelector('#display');

    valorInput.value = valorInput.value + caracter;
    
    if(valorInput.value>0){
        valorInput.value = caracter
    }

}

function limpar(){
    document.querySelector('#display').value = ' '
}

function calcular(){
    let valorInput = document.querySelector('#display');

    valorInput.value = eval(valorInput.value)
}