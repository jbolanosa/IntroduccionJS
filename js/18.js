function sumar(numero1, numero2){ //parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); //argumentos o los valores reales
sumar(2, 3);



const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}

sumar2(3, 3);

//parametros por default
function sumar3(numero1 = 0, numero2 = 0){ //parametros por default
    console.log(numero1 + numero2);
}