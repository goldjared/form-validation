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
  });

  return {
    get: function() {
      return elementStorage;
    }
  };
}());

console.log(htmlElements.get().email);
htmlElements.get().email.style.backgroundColor = 'red';
