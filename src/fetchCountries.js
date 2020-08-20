const baseUrl = 'https://restcountries.eu/rest/v2/name/'


const fetchCountries = function (searchQuery) {
    return fetch(baseUrl + searchQuery).then(response => response.json());
}


export default fetchCountries
