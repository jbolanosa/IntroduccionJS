//objetos

const producto = {
    nombreProduto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProduto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring
const {precio, nombreProduto} = producto;

console.log(precio);
console.log(nombreProduto);