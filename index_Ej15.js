/*Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (array, index1, index2) => {
  const item1 = array[index1]
  const item2 = array[index2]
  array.splice(index1, 1, item2)
  array.splice(index2, 1, item1)

  return array
}

console.log(swap(fantasticFour, 1, 2))
