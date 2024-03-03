/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
/* SOLUCIÖN */
const resultsum = exams.reduce(
  (acumulado, scores) => acumulado + scores.score,
  0
)
console.log(`Ejeccio 7.1 tiene de solución : ${resultsum}`)

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/
let FilterSuma = 0
/* SOLUCIÓN */
const resulfilteredsumt = exams.reduce((acumulado, { score }) => {
  if (score >= 5) {
    console.log(`current score is: ${score}`)
    FilterSuma += score
  } else {
    //pass
  }
  return acumulado
}, FilterSuma)
console.log(`Ejeccio 7.2 tiene de solución : ${FilterSuma}`)

/*7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/

/* SOLUCIÓN */
let Media = 0
const resultAverage = exams.reduce((acumulado, scores) => {
  console.log(scores.score)
  Media += scores.score / Object.keys(exams).length
  return acumulado
}, Media)
console.log(`Ejeccio 7.3 tiene de solución : ${Media}`)
