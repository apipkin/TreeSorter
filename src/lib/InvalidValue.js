// Custom Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

/**
 * Custom error message to throw if a value is not valid
 * @param {string} [Optional] custom message
 */
function InvalidValue (msg) {
  this.name = 'InvalidValue';
  this.message = msg || 'Invalid value.';
  this.stack = (new Error()).stack;
}

InvalidValue.prototype = Object.create(Error.prototype);
InvalidValue.prototype.constructor = InvalidValue;

// exports
module.exports = InvalidValue;