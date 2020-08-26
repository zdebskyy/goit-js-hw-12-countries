import './styles.css';

import {debounce} from 'lodash'
import fetchCountries from './fetchCountries.js';
import country from './data.hbs'
import list from './data-list.hbs'
import {error} from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const input = document.querySelector('#text');
const box = document.querySelector('#box');


input.addEventListener('input', debounce(searchFunction, 1000))

function searchFunction() {
    const searchValue = input.value;
    if (searchValue === ''){
        return;
    }

    fetchCountries(searchValue).then((data) => {
        if (!data) {
            error({ text: "Not found" });
            return;
            }

        if (data.length !== 1 && data.length<= 10  ){
        list(data)
        box.insertAdjacentHTML('beforeend', list(data))
    }
    

    if(data.length === 1){
       country(data);
    box.insertAdjacentHTML('beforeend', country(data))
    } 
    if(data.length> 10) {
            error({text: 'To many requests'})
        }
    })

    if (searchValue === '') {
        box.innerHTML = '';
    }
}
