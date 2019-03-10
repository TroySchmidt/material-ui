<<<<<<< HEAD
/* eslint-disable flowtype/require-valid-file-annotation, no-console */

/**
 * Makes sure the tests fails when a PropType validation fails.
 */
function consoleError() {
  console.error = (...args) => {
    console.log(...args);
    throw new Error(...args);
  };
}

module.exports = consoleError;
||||||| merged common ancestors
=======
/* eslint-disable no-console */

// Makes sure the tests fails when a PropType validation fails.
function consoleError() {
  console.error = (...args) => {
    // Can't use log as karma is not displaying them.
    console.info(...args);
    throw new Error(...args);
  };
}

module.exports = consoleError;
>>>>>>> 0586264fbf30ad2aec78e5915b687a56b3c7d014
