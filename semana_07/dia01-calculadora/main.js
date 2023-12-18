// console.log("Hola")
let numeroActual = '0'
let operador = ''
let operando = ''

const inputDisplay = document.querySelector('.display')

const buttons = document.querySelectorAll('button')

// console.log(buttons)
// console.log(inputDisplay)

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (event) {
    //numeroActual = ''
    // console.log(event)

    const buttonText = event.target.textContent

    // console.log(buttonText)
    if ('+-*'.includes(buttonText)) {
      //Asigno el operador actual
      operador = buttonText
      operando = Number (numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      //Aquí realizo las operaciones matemáticas en base al número actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      }else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    }else if (buttonText === 'AC') {
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      //Cuando hemos presionado los números
      numeroActual = numeroActual + Number(buttonText)
    }

    inputDisplay.value = numeroActual
  })
})
