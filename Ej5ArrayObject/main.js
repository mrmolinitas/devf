//Array o arreglo 
var color = ['azul', 'Rojo', 'Amarillo', 'Verde']

console.log(color)
var persona = {
    nombre: 'Josue',
    edad: 22,
    telefono: '40831544',
    direccion: 'Ciudad',
    musica: ['rock', 'Regaeton', 'Salsa', 'Brinca'],
    peliculas: {
        accion: ['MI', 'Ronning', '2F2F'],
        drama: ['titanic', 'Match Point'],
        comedias: ['La propuesta', 'Yo antes de ti', 'One Day'],
        terror: {
            gore:'Saw',
            slasher:'Halloween',
            vampiros: 'Crepusculo'
        }
    }
}

console.log(persona.nombre)
console.log(persona.musica[3])
console.log(persona.peliculas.accion[2])