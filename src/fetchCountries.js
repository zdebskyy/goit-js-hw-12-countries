const baseUrl = 'https://restcountries.eu/rest/v2/name/'


const fetchCountries = function (searchQuery) {
    return fetch(baseUrl + searchQuery)
    .then((response) => {
    if (response.ok) {
    return response.json();
    }
    throw new Error(response.status);
    })
    .catch((err) => console.log(err));
    };


export default fetchCountries



