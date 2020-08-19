import './styles.css';

import { debounce } from 'lodash'
import fetchCountries from './fetchCountries.js';
import country from './data.hbs'
import list from './data-list.hbs'


const input = document.querySelector('#text');
const box = document.querySelector('#box');



fetchCountries('usa').then(data => console.log(data))

// input.addEventListener('input', debounce(searchFunction, 500))

// function searchFunction(){
// const searchValue = input.value;
// if(!searchValue) {
//     return
//     };
// fetchCountries(searchValue).then((data)=>{
//     console.log(data);
//     if(data.length !== 1 && data.length <= 10  ){
//         list(data)
//         box.insertAdjacentHTML('beforeend',  list(data))
//     }
//     if(!data) {
//         return;
//         }

//     if(data.length === 1){
//        country(data);
//     box.insertAdjacentHTML('beforeend', country(data))
//     } 
//     }
// )
// if (searchQuery === ''){
//     box.innerHTML = '' ;
// }
// }



