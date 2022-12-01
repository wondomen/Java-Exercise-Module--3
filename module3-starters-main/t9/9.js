'use strict';
const button = document.getElementById('start');
const kuta = document.querySelector('#result');
button.addEventListener('click', options);

function options() {
  let num = document.getElementById('calculation').value;
  let result = Function('return ' + num)();
  kuta.innerHTML = result;

}