// POO

//object literal
const producto = {
    nombre: 'Table',
    precio: 500
}

//object constructor
//no es tan comun
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop', 300, true);
// const producto4 = new Producto('Monitor Curvo de 49"', 800, true);

//crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de: ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

