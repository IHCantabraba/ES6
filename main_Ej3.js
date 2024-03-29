/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43]

/* SOLUTION */
const [...copy] = pointsList
console.log(`copy is ${copy}`)
console.log(pointsList)

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

/* SOLUTION */
const Copytoy = { ...toy }

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/

const pointList = [32, 54, 21, 64, 75, 43]
const pointLis2 = [54, 87, 99, 65, 32]

/* SOLUTION */
const combo = [...pointList, ...pointLis2]
console.log(combo)

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toys = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

/* SOLUTION */
const toysCombo = { ...toys, ...toyUpdate }
console.log(toysCombo)

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

/* SOLUTION */
const subcolor = colors.filter((color) => color != 'amarillo')
console.log(subcolor)
