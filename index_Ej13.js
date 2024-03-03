/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
const findArrayIndex = (inputText, data) => {
  const reducedArray = removeIndex(inputText, inputText.indexOf(data))
  return reducedArray
}

const removeIndex = (array, index) => {
  array.splice(index, 1)
  return array
}
const data = 'Leia'
const reducedArray = findArrayIndex(mainCharacters, data)
console.log(`El array resultante es: ${reducedArray}`)
