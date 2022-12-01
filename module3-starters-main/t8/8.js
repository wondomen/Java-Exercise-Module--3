'use strict';
const button = document.getElementById('start');
const option = document.getElementById('operation');
const kuta = document.querySelector('#result');
button.addEventListener('click', options)


function options() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    if (option.value === 'add'){
        let sum = num1 + num2;
       kuta.innerHTML = sum;
    }
    if (option.value === 'sub'){
        let difference = num1 - num2;
        kuta.innerHTML = difference;
    }
    if (option.value === 'multi'){
        let product = num1 * num2;
        kuta.innerHTML = product;
    }
    if (option.value === 'div'){
        let division = num1 / num2;
       kuta.innerHTML = division;
    }
}