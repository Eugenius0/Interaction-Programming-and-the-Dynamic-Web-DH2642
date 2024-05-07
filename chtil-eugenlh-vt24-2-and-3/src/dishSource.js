import { BASE_URL, API_KEY } from './apiConfig';

function searchDishes(searchParams) {
  // Construct the URL with the complexSearch endpoint
  const complexSearchEndpoint = '/recipes/complexSearch';
  const url = `${BASE_URL}${complexSearchEndpoint}?${new URLSearchParams(searchParams).toString()}`

  const headers = {
    'X-DH2642-Key': API_KEY,
    'X-DH2642-Group': '14',
  }

  const gotResponseACB = (response) => {
      return response.json();
  }

  const getDishesArrayACB = (data) => {
    return data.results || []
  }


  // Fetch data
  return fetch(url, { headers })
    .then(gotResponseACB)
    .then(getDishesArrayACB)
}



function getMenuDetails(ids_array) {
    // Construct the URL with the endpoint that retrieves information about several dishes at once
    const menuDetailsEndpoint = '/recipes/informationBulk'
    const queryParams = { ids: ids_array };
    const url = `${BASE_URL}${menuDetailsEndpoint}?${new URLSearchParams(queryParams).toString()}`
  
    const headers = {
      'X-DH2642-Key': API_KEY,
      'X-DH2642-Group': '14',
    }
  
    const gotResponseACB = (response) => {
        if (!response || response.status !== 200) {
            throw new Error(`HTTP error! Status: ${response ? response.status : 'unknown'}`);
        }
        return response.json()
    }
  
  
    // Fetch data
    return fetch(url, { headers })
      .then(gotResponseACB)
}


function getDishDetails(id) {
    // Invoke getMenuDetails and return the promise chain
    return getMenuDetails([id]).then(arrayToObjectACB);
}
  
// Process the result of getMenuDetails
function arrayToObjectACB(array) {
    console.log('Array parameter:', array);
    // Return the first element of the array, a dish
    return array[0]
}


export { searchDishes, getMenuDetails, getDishDetails };