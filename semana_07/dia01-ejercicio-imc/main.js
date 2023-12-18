//console.log("hola")
const inputPeso = document.getElementById('peso')
inputAltura = document.getElementById('altura')
const buttonCalcular = document.getElementById('calcular')
const divResultado = document.getElementById('resultado')

// console.log(inputPeso)
// inputPeso.addEventListener(TIPO_DE_EVENTO, FUNCION)
/*
inputPeso.addEventListener('input', function (event) {
  //console.log('Escribiendo en la caja de peso')
  // console.log(event)
  console.log(event.target.value)
  const peso = event.target.value

})
*/
buttonCalcular.addEventListener('click', function (event) {
  //console.log(event)
  // console.log('click')
  const peso = inputPeso.value
  const altura = inputAltura.value

  const indiceMasaCorporal = peso/((altura/100)**2)

  let resultado = ''

  if(indiceMasaCorporal < 18.5) {
    resultado = 'Baja'
  }else if(indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9){
    resultado = 'Normal'
  // }else if(indiceMasaCorporal >= 25 && indiceMasaCorporal <= 29.9) {
  }else if(25 < indiceMasaCorporal < 29.9) {
    resultado = 'Sobrepeso'
  }else if(indiceMasaCorporal > 30){
    resultado = 'Obeso'
  }else {
    resultado = 'Datos Incorrectos'
  }

  console.log(indiceMasaCorporal)
  console.log(resultado)

  divResultado.innerText = 'Tu índice de masa corporal es: '+resultado
})