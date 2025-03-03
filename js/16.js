//funciones

//declaracion de funcion

function sumar() {
    console.log(10 * 10);
}


sumar();

//Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}
//tema con el hoisting, la llamada de esta funcion debe ir despues.
sumar2();



//IIFE, son utiles para proteger, se mandan a llamar a ellas mismas
(function() {
    console.log('Esto es una funcion');
})();