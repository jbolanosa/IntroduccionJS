//arrow functions

// const sumar2 = (n1, n2) => 
//     n1 + n2;

// console.log(sumar2(1, 2));

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Mayo');

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//foreach
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});


//some ideal para arreglo de objetos, saber si un dato esta dentro del array
resultado = carrito.some(producto => producto.nombre === 'Celular');

//cona arrow function
resultado = carrito.some(producto => producto.nombre === 'Celular');


//reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);


//filter
//obtener elementos segun condicion
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre === 'Celular');

resultado = carrito.filter(producto => producto.nombre !== 'Celular');


console.log(resultado);