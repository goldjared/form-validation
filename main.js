function formOps() {
  const form = document.querySelector('#main-form');
  console.log(form)
  function error(element) {

  }

  function validate(element) {

  }

  function createElement(elements) {
    const elements = ['email', 'country', 'zip', 'password', 'password-confirm'];
    const elementStorage = {};
    elements.forEach((element) => {
      elementStorage[element] = document.getElementById(`${element}`);
      console.log(element)
      console.log(elementStorage)
    })
    function getElements() {
      return elementStorage;
    }
    return { getElements }
  }

  return { createElement };
}
console.log(formOps().createElement())
console.log(formOps().createElement().getElements().zip)
formOps().createElement().getElements().zip.style.backgroundColor = 'red';
