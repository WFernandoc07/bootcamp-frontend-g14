console.log('Hola JS')

// Arrays
const numero1 = 1
const numero2 = 2
const numero3 = 3

const listaDeValores = [1, 2, 3, 'William', 'Castrejon', true]
console.log(listaDeValores)

console.log(listaDeValores[0])
console.log(listaDeValores[3])

listaDeValores[2] = 99
console.log(listaDeValores)

listaDeValores.push('Javascript')
console.log(listaDeValores)

listaDeValores.pop()
console.log(listaDeValores)

// Objetos
const miObjeto = {
  //Key : value
  nombre: 'William',
  apellido: 'Castrejon',
  'mi edad': 27
}

console.log(miObjeto)

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)

console.log(miObjeto['nombre'])
console.log(miObjeto['mi edad'])

//delete miObjeto.apellido
console.log(miObjeto)

// Destructuring
const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
console.log(nombreValue)

const { nombre, apellido} = miObjeto
console.log(nombre, apellido)

const { nombre: nombreValor, apellido: apellidoValor } = miObjeto
console.log(nombreValor, apellidoValor)

// Spread operator ...
const producto = {
  nombre: 'Laptop',
  precio: 6800,
  producto: 'tech'
}

const cliente = {
  nombre: 'Julio',
  isVip: true
}

const nuevoObjeto = { ...producto, ...cliente}
console.log(nuevoObjeto)


const nuevoObjetoSinColisiones = {
  producto: {...producto},
  cliente: {...cliente},
}

console.log(nuevoObjetoSinColisiones)

console.log(Object.keys(producto))
console.log(Object.values(producto))
console.log(Object.entries(producto))

console.log('Bienvenido'.length)
console.log(listaDeValores.length)


/*--------- Ejercicio ----------*/
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]


const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]





