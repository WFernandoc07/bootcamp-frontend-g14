const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

const tasks = []

taskInput.addEventListener('keypress', function(event){
  //Lógica de la App
  // console.log(event)
  if (event.key === 'Enter'){
    // console.log('Agregando nueva tarea')
    const value = event.target.value
    console.log(value)

    tasks.push(value)

    console.log(tasks)
  }
})

taskAdd.addEventListener('click', function(event) {
  //Se ejecutará cuando hagamos click en el botón 'Añadir tarea'

  //let button = document.createElement('button')
  //button.innerText = 'Hola'

  if(taskInput.value === '') {
    alert('El campo es requerido')
    return
  }

  const li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  let span = document.createElement('span')
  span.innerText = taskInput.value
  li.appendChild(span)

  // TODO: añadir un botón al li con el texto 'Borrar'
  let button = document.createElement('button')
  button.innerText = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  taskInput.value = ''
})


taskList.addEventListener('click', function (event) {
  console.log(event)
  const target = event.target

  if (target.tagName == 'INPUT' && target.type == 'checkbox') {
    target.classList.toggle('checked')
  }

  if (target.tagName == 'BUTTON') {
    target.parentElement.remove()
  }
})