//estructuras de control

const rol = 'ADMINISTRADOR';

if( rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema.');
} else if(rol == 'EDITOR'){
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else {
    console.log('No tines acceso');
}