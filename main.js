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

function error(e, errorMsg, zipError) {
  if(e.srcElement.validity.valueMissing) {
    errorMsg.textContent = 'Required';
  } else if(e.srcElement.validity.tooShort) {
    errorMsg.textContent = `Too short (${e.srcElement.value.length}/6)`
  } else if(e.srcElement.validity.typeMismatch) {
    errorMsg.textContent = 'Follow correct format john@smith.com' 
  }

  if(e.srcElement.id === 'zip') {
    errorMsg.textContent = `${zipError}`;
    console.log(errorMsg)
    e.srcElement.setCustomValidity("Invalid field.");
  }


  if(e.srcElement.className === 'error') {
    return;
  }
  e.srcElement.classList.toggle('error')
 
}

function validate(e) {
  function killError() {
    if(e.srcElement.className === 'error') {
      e.srcElement.classList.toggle('error');
      }
      errorMsg.textContent = '';
    if(e.srcElement.id === 'zip') {
      e.srcElement.setCustomValidity("");
    }
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

    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);
    const result = constraint.test(zip)
    console.log(result)
    if(result === false) {
      error(e, errorMsg, constraints[country][1])
    } else {

      console.log(e.srcElement.validity)
      killError();
    }
  } 
  const errorMsg = e.srcElement.nextElementSibling;
  if(e.srcElement.id === 'zip') {
    //
    zipVal(htmlElements.elementStorage.country.value, htmlElements.elementStorage.zip.value);
    return;
  }
  if(!e.srcElement.validity.valid) {
    error(e, errorMsg)
  } else {
    console.log(e.srcElement.validity)
    killError();
  }

}


