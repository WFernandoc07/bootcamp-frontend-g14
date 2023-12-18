// import regions from './constants.js'
import { fetchCountries } from './services.js'
import { renderCountries } from './utils.js'

const searchInput = document.querySelector('.app__search')
const filterSelect = document.querySelector('.app__filter')
const scrollTopButton = document.querySelector('.app_scrolltop')

let countryData = []

searchInput.addEventListener('keyup', (event) => {
  console.log(event.target.value)

})
//evento keypress ya está en desuso
document.addEventListener('DOMContentLoaded', function(){
  console.log('El DOM se cargó completamente')

  fetchCountries()
    .then(response => renderCountries(response))
})

