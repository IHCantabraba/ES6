/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
const user = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

/* SOLUCION */
const userNames = user.map((user) => user.name)
console.log(userNames)

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
/* SOLUCION */
const UserNames = users.map((u) =>
  u.name.startsWith('A') ? 'Anacleto' : u.name
)
console.log(UserNames)

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
 de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
/ cuando el valor de la propiedad isVisited = true.*/
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
/* SOLUCION */
const visited = cities.map((c) =>
  c.isVisited ? c.name + ' (Visitado)' : c.name
)
console.log(visited)
