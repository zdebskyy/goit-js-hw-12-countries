
const baseUrl = 'https://restcountries.eu/rest/v2/name/'


const fetchCountries = function (searchQuery){
    fetch(baseUrl + searchQuery).then(response =>  {
        console.log(response)
        if(response.ok) {
            return response.json()
            }
            
            console.log(response.status);
    }).then(data => {
        console.log(data);
        return data;
       })
}


export default fetchCountries
