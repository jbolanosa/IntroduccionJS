//promise, valor que puede estar disponible ahora, en un futuro o nunca
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se pudo iniciar sesion');
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));

//console.log(usuarioAutenticado);

//En los promises existen 3 valores
//pending: no se ha cumplido pero tampoco se ha rechazado.
//Fulfilled: ya se cumplio
//Rejected: se ha rechazado o no se puede cumplir