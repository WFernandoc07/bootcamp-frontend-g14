// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
let edadPersona = 64
if (edadPersona > 18) {
  console.log('Es Mayor de edad')
}else {
  console.log('Es Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - Si es español se mostrará 'Hola'
//    - Si es inglés mostrará 'Hello'
//    - Si es aimara mostrará 'Kamisaraki'
let idioma = 'aimara'
switch (idioma) {
  case 'ingles':
    console.log('Hello')
    break
  case 'aimara':
    console.log('Kamisaraki')
    break
  default:
    console.log('Hola')
}
// 3. Si un número es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un número es divisible entre 3 devolver 'fizz'
//    Si un número es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

const numeroDivisible = 30

if(numeroDivisible%15 === 0) {
  console.log('fizzbuzz')
}else if(numeroDivisible%3 === 0) {
  console.log('fizz')
}else if(numeroDivisible%5 === 0) {
  console.log('buzz')
}else {
  console.log(numeroDivisible)
}

// 4. Retornar true si un número es primo, sino devolver false
//     Pista: un número primo es divisible por si mismo y por uno.
const numeroPrimo = 28
let m = 2
let esPrimo = false

do {
  if(numeroPrimo%m == 0){
    esPrimo = false
  }else {
    esPrimo = true
  }
  m++
}while(m < numeroPrimo)
console.log(esPrimo)

// 5. Devolver un valor que se incremente de dos y devuelva los menores a 10


//Funciones
  //Definiendo una función
function nombreFuncion() {
}

// Funciones sin parámetros
/*
function imprimirNombre(){
  console.log('Hola Soy William')
}

imprimirNombre()
*/

//Funciones con parámetros
function imprimirNombre(nombre){
  console.log('Hola Soy ' + nombre)
}

imprimirNombre('William')


function imprimirNombreConApellido(nombre, apellido) {
  console.log('Hola Soy ' + nombre + " " + apellido)
}

imprimirNombreConApellido('William','Castrejon')


// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edad222 = 17

function esMayorOMenorDeEdad (edad) {
  if(edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad (edad222)

//Funciones con retorno
const edad333 = 22

function esMayorOMenorDeEdad (edad) {
  if(edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

esMayorOMenorDeEdad (edad333)