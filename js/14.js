//arreglos o arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Mayo');
console.table(meses);

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan"}, [1, 2, 3]];

// console.log(numeros[4]);


// //conocer la extension de un arreglo
// console.log(meses.length);

// //recorre todo el arreglo
// numeros.forEach( function(numero) {
//     console.log(numero);
// });


//agrega una posicion si no existe, poco comun
//numeros[5] = 60;

//agrega datos al final
numeros.push(60);

//agrega datos al inicio
numeros.unshift(-10, -20, -30);

//eliminar elementos de una arreglo

numeros.pop(); //elimina el ultimo elemento
numeros.shift(); //elimina el primer elemento

numeros.splice(2, 1); //elimina desde la posicion cierto numero de elementos.

//rest operator o spread operator

//alternativa para push y unshift, mejor forma de hacerlo
const nuevoArreglo = [...meses, "Junio"]; //para agregar al inicio
//const nuevoArreglo = ["Enero", ...meses]; //para agregar al final

//alternativa para pop, shift y splice
console.table(nuevoArreglo);

console.table(numeros);