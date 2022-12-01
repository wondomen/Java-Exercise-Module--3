'use strict';
const form = document.getElementById('source');
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const p = document.querySelector('p');
form.addEventListener("submit", function(event){
  event.preventDefault()
  p.innerText = `Your name is ${firstName.value} ${lastName.value}`;
});