/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección con información de los jugadores hasta el momento presentados
- imprima la información de los jugadores en el formato: {nombre} "{apodo}" {apellido} (edad) - {posiicion}.

¿Cómo puedo obtener de la colección solamente los que son mediocampistas?
*/
const posiciones = {
    mediocampista: 'mediocampista',
    delantero: 'delantero',
    arquero: 'arquero',
    defensa: 'defensa'
}

const Nahitan = {
    nombre: 'Nahitan',
    apodo: null,
    apellido: 'Nández',
    posicion: posiciones.mediocampista,
    fechaNacimiento: '1995-12-28'
}

const Federico = {
    nombre: 'Federico',
    apodo: 'pajarito',
    apellido: 'Valverde',
    posicion: posiciones.mediocampista,
    fechaNacimiento: '1990-12-28'
}

const jugadores = [Nahitan, Federico]

function edad(fechaNacimiento) {
    const fechaNac = new Date(fechaNacimiento).getFullYear();
    const fechaActual = new Date().getFullYear();
    const edad = fechaActual - fechaNac;

    return edad;
}

function Message(nombre, apodo, apellido, fechaNacimiento, posicion) {
    const edadPersona = edad(fechaNacimiento);
    console.log(`${nombre} "${apodo}" ${apellido} (${edadPersona} años) (posicion: ${posicion})`);
}
// Message(Federico.nombre, Federico.apodo, Federico.apellido, Federico.fechaNacimiento, Federico.posicion);
Message(jugadores.map(jugadores))