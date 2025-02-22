//objetos

const producto = {
    nombreProduto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// console.log(producto.nombreProduto);
// console.log(producto.disponible)

// console.log(producto["precio"]);


//agregar propiedades
producto.imagen = 'imagen.jpg';

// Eliminar propiedades
delete producto.disponible;

console.log(producto);