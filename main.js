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

function zipVal(country, zip) {
  console.log(country)
  console.log(zip)
  // we need to set the zip input to either valid or invalid
  // based on the value it has, and the country code supplied
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
    us: [
      "^\\d{5}$",
      "United States ZIPs must have exactly 5 digits"
    ]
  };
// wwe got country, we got zip. based on country, we run the zip against its regex.
// const result = constraints[country][0].test('zip');
// console.log(constraints[country][0].test());
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);
  const result = constraint.test(zip)
  console.log(result)
}

function validate(e) {
  const errorMsg = e.srcElement.nextElementSibling;
  if(e.srcElement.id === 'zip') {
    //
    zipVal(htmlElements.elementStorage.country.value, htmlElements.elementStorage.zip.value);
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


