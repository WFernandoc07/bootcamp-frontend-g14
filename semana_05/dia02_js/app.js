console.log("Hola mundo")
console.log('Hola G14')
console.log(2 + 2)

//Tipos de datos en JS
//Numbers: ==> operadores aritméticos (+ - * /)
console.log(100 + 4)
console.log(100 * 4)
console.log(100 / 4)
console.log(100 - 4)

//módulo ==> Residuo
console.log("Módulo\n" + 10 % 4)
console.log("tipo de dato es:\n" + typeof (15))

//String
console.log("Hola mi nombre es William")
console.log("tipo de dato es:\n" + typeof ("15"))

//typeof(), produce una cadena de caracteres un string, para indicar el tipo de valor


//Booleans: true(verdadero), false(falso).
console.log(typeof(3===5))
console.log(3>5)
console.log(3<5)

//Conversión automática => Coerción de tipo.
console.log('5'-1)
console.log('5'+1)
console.log('william'+"castrejon")


//VARIABLES
let age = 18
let nombre

nombre = 'William'
console.log(nombre + ' ' + age)

nombre = 'Fernando'
age = 20
console.log(nombre + ' ' + age)


const age1 = 25
const nombre1 = "Juan"

//nombre1 = 'Carlos'
console.log(nombre1)

//Reglas para nombrar variables
/*
  1° No debe incluir espacios (let age of friends)
  2° No pueden ser palabras reservadas (let function = 'function')
  3° No pueden comenzar con números (let 2age = 25)
  4° No pueden contener signos de puntuación, excepto $ y/o _ (let abrir.puerta = 'open'
  let abrir$puerta = 'open')
*/

//Sugerencia para nombrar variables
/*
  1° Utilizar la convención camelCase (let firstName = 'William')
    -- PascalCase => (FirstName)
    -- snake_case => (first_name)
  2° Utilizar nombres en inglés
    let age5 = 25
  3° Utilizar nombres descriptivos
    let name5 = 'Christian' ... El string es un nombre.
    let age5 = 25 ...El número es una edad.
*/





