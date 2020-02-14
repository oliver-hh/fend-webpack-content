/**
 * Handle Submit
 * @param {*} event
 */
function handleSubmit(event) { // eslint-disable-line no-unused-vars
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById('name').value;
  checkForName(formText);

  console.log('::: Form Submitted :::');
  fetch('http://localhost:8080/test')
      .then((res) => res.json())
      .then(function(res) {
        document.getElementById('results').innerHTML = res.message;
      });
}
