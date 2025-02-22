//objetos

const producto = {
    nombreProduto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medidas: '1m'
}

//unir objetos sin modificar los datos originales (por buena practica)
//spread operator
const nuevoProducto = { ...producto, ...medidas};

console.log(nuevoProducto);