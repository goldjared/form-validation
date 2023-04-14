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
    elementStorage[element].addEventListener('keydown', validate);

  });
  return { elementStorage }
}());

function error(element) {
// if error is on, validate here

// if error is off, validate onexit
}

function validate(e) {
  console.log(e.srcElement.validity.valid)
  console.log(e.srcElement.validity)
  // if error is on, validate here

  // if error is off, validate onexit


}

htmlElements.elementStorage.email.style.backgroundColor = 'red';

