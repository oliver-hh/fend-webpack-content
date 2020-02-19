
/*
  That is one reason why you should avoid to to use inline event handlers
  and should use addEventListener('keyup', render, false) instead.

  Using inline event handlers will also result in problems if you use
  scripts like uglifyjs.
 */

/**
 * Check whether name exists
 * @param {*} inputText
 */
function checkForName(inputText) {
  console.log('::: Running checkForName :::', inputText);
  const names = [
    'Picard',
    'Janeway',
    'Kirk',
    'Archer',
    'Georgiou',
  ];

  if (names.includes(inputText)) {
    alert('Welcome, Captain!');
  }
}

export {checkForName};
