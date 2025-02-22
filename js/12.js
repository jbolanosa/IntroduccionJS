// "use strict"; //Correr JS en modo estricto
//objetos

const producto = {
    nombreProduto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); //no permite agregar ni eliminar propiedades pero se pueden modificar.
Object.freeze(producto); //no permite agregar ni eliminar propiedades ni modificarlas.

producto.precio = 'Nuevo precio';

delete producto.precio;

console.log(Object.isSealed(producto));
console.log(Object.isFrozen(producto));