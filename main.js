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
    console.log('fired 2')
    console.log(e.srcElement.value.length)
    console.log(e.srcElement.value)
    errorMsg.textContent = `Too short (${e.srcElement.value.length}/6)`
  } else if(e.srcElement.validity.typeMismatch) {
    console.log('fired 3')
    errorMsg.textContent = 'Follow correct format john@smith.com' 
  }
  if(e.srcElement.className === 'error') {
    return;
  }

  e.srcElement.classList.toggle('error')
 
}

  function validate(e) {
  const errorMsg = e.srcElement.nextSibling;
    if(!e.srcElement.validity.valid) {
      error(e, errorMsg)
    } else {
      // e.srcElement.classList.toggle('error');
      if(e.srcElement.className === 'error') {
      e.srcElement.classList.toggle('error');

      }
      errorMsg.textContent = '';
    }

  }


htmlElements.elementStorage.email.style.backgroundColor = 'red';

