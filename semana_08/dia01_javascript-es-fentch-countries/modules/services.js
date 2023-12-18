const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital'


export function fetchCountries () {
  return fetch(url) // Promise
    .then(response => response.json())
    //.then(data => data)
    .catch(err => console.log(err))

  //console.log(response)
}


//-----------------------------------------------------------------
/*
export const fetchCountries = async () => {
  try {
    const response = await fetch(url)

    if(!response.ok){
      throw new error('Error en el request: ' + response).status
    }
  }catch(error){
    console.error(error)
  }
}
*/