/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
const persona = {
  nombre: 'Juan',
  apodo: 'Juancito',
  apellido: 'Lopes',
  fechaNacimiento: '1995-4-23'
}

function edad(fechaNacimiento) {
  const anioNac = new Date(fechaNacimiento).getFullYear();
  const mesNac = new Date(fechaNacimiento).getMonth();
  const diaNac = new Date(fechaNacimiento).getDate();

  const anioActual = new Date().getFullYear();
  const mesActual = new Date().getMonth();
  const diaActual = new Date().getDate();
  let edad = anioActual - anioNac;
  if (mesNac < mesActual) {
    edad = edad - 1
    console.log('restado')
    return edad
  } else if (mesNac === mesActual) {
    if (diaNac < diaActual) {
      edad = edad - 1
      return edad
    }
    return edad
  }
  return edad;
}

function Message(nombre, apodo, apellido, fechaNacimiento) {
  const edadPersona = edad(fechaNacimiento);
  console.log(`${nombre} "${apodo}" ${apellido} (${edadPersona} años)`);
}
Message(persona.nombre, persona.apodo, persona.apellido, persona.fechaNacimiento);