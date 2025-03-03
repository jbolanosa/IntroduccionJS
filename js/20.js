//metodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Cancion ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(playlist) {
        console.log(`Creando playlist ${playlist}`);
    },
    reproducirPlaylist: function(playlist) {
        console.log(`Reproduciendo playlist ${playlist}`);
    }
}


reproductor.borrarCancion = function(id) {
    console.log(`Eliminanod la cancion: ${id}`);
}


reproductor.reproducir(1);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('EDM');
reproductor.reproducirPlaylist('EDM');


console.log(reproductor);