function formOps() {
  const form = document.querySelector('#main-form');
  // console.log(form)
  function error(element) {

  }

  function validate(element) {

  }

  function elementStack() {
    
    function createElement() {
      const elementStorage = {};
      const elements = ['email', 'country', 'zip', 'password', 'password-confirm'];
      elements.forEach((element) => {
        elementStorage[element] = document.getElementById(`${element}`);
        // console.log(element)
        // console.log(elementStorage)
      })
      function getElements() {
        return elementStorage;
      }
      return { createElement, getElements }

    }
    
    return { createElement };
  }
  return { elementStack }
}



(formOps().elementStack().createElement())
console.log('yo', formOps().elementStack().createElement().getElements())
formOps().elementStack().createElement().getElements().zip.style.backgroundColor = 'red';
