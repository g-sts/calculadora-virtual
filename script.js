function adicionarCaracter(caracter){
    const valorInput = document.querySelector('#display').value

    document.querySelector('#display').value = valorInput + caracter 

    console.log(caracter)

}