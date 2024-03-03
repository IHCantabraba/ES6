/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/

const _Arrow = (a = 10, b = 5) => {
  console.log(a + b)
}

// 1.1 Ejecuta esta función sin pasar ningún parametro
_Arrow()
// 1.2 Ejecuta esta función pasando un solo parametro
_Arrow(1)
// 1.3 Ejecuta esta función pasando dos parametros
_Arrow(6, 2)
