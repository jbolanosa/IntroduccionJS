
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log('Resultado es: ', resultado))
});


if (Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        body: 'Muy bonita notificación'
    })
}