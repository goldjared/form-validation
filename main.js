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

    elementStorage[element].addEventListener('focusout', validateQueue);
    elementStorage[element].addEventListener('keydown', validateQueue);

  });
  return { elementStorage }
}());

function error(e, errorMsg) {
  if(e.srcElement.validity.valueMissing) {
    errorMsg.textContent = 'Required'
  }
  // shit coming here HAS an error. it's aleady proven.
  // this to determine what error is, print it, give it the error class.
  // console.log(errorMsg, 'error');
  // e.srcElement.classList.toggle('error')
  // errorMsg.textContent = 'error bro'
  // this should 
  if(e.srcElement.className === 'error') {
    return;
  }

  e.srcElement.classList.toggle('error')
 
}
function validateQueue(e) {
  const errorMsg = e.srcElement.nextSibling;
  console.log(errorMsg, 'errorMsg')
  console.log(e.srcElement.className, 'here')
  // console.log(e.srcElement.nextSibling);
  console.log(e.type);
  if(errorMsg.classList === 'error' && e.type === 'keypress') { // if error is on
    validate(e)
  } else if(e.type === 'focusout') { // if error is on
    validate(e)
  }
  function validate(e) {
    if(!e.srcElement.validity.valid) {
      error(e, errorMsg)
    } else {
      return
    }

  }

}

htmlElements.elementStorage.email.style.backgroundColor = 'red';

