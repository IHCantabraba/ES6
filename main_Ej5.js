/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]

/* SOLUCION */
const filterAge = ages.filter((a) => a > 18)
console.log(filterAge)

/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
const age = [22, 14, 24, 55, 65, 21, 12, 13, 90]

/* SOLUCION */
const EvenAge = age.filter((a) => a % 2 === 0)
console.log(EvenAge)

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/

const streamer = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]

/* SOLUCION */

const streamerFilter = streamer.filter(
  (a) => a.gameMorePlayed == 'League of Legends'
)
console.log(streamerFilter)

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
]
/* SOLUCION */

const filtroStreamer = streamers.filter((a) => a.name.includes('u'))

console.log(filtroStreamer)
/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

/* SOLUCION */
const streamersFilter = streamers.filter((a) =>
  a.gameMorePlayed.includes('Legends') && a.age > 35
    ? (a.gameMorePlayed = a.gameMorePlayed.toUpperCase())
    : a.gameMorePlayed.includes('Legends')
)
console.log(streamersFilter)
