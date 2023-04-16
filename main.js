/*
ok i need
my html inputs/select
my validator
my error

*/
const htmlElements = (function () {
  'use strict';
  const elementStorage = {};
  const elements = ['email', 'country', 'zip', 'password', 'password-confirm'];
  elements.forEach((element) => {
    elementStorage[element] = document.getElementById(`${element}`);

    elementStorage[element].addEventListener('focusout', validate);
    // elementStorage[element].addEventListener('keydown', validateQueue);

  });
  return { elementStorage }
}());

function error(e, errorMsg) {
  if(e.srcElement.validity.valueMissing) {
    errorMsg.textContent = 'Required';
  } else if(e.srcElement.validity.tooShort) {
    errorMsg.textContent = `Too short (${e.srcElement.value.length}/6)`
  } else if(e.srcElement.validity.typeMismatch) {
    errorMsg.textContent = 'Follow correct format john@smith.com' 
  }
  if(e.srcElement.className === 'error') {
    return;
  }

  e.srcElement.classList.toggle('error')
 
}

function zipVal(country, e) {
console.log(country)
console.log(e)
// we need to set the zip input to either valid or invalid
// based on the value it has, and the country code supplied
const countries = {
  
}
}

function validate(e) {
  const errorMsg = e.srcElement.nextElementSibling;
  if(e.srcElement.id === 'zip') {
    //
    zipVal(htmlElements.elementStorage.country.value, e);
  }
  if(!e.srcElement.validity.valid) {
    error(e, errorMsg)
  } else {
    if(e.srcElement.className === 'error') {
    e.srcElement.classList.toggle('error');

    }
    errorMsg.textContent = '';
  }

}


