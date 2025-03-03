//estructuras de control, switch

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'efectivo':
        console.log('Pageste con efectivo');
        break;
    default:
        console.log('Aun no has pagado');
        break;

}