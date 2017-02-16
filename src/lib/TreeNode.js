/**
 * Factory: Used to create an BSTree Node. The Node has three properties: 
 *   `operator`, `left`, and `right`. Left and right is either null or a 
 *   TreeNode
 * @param {Object} [optional] Instance values to override default values
 * @return {Object} Tree Node
 */
var Factory = function (primer) {

  return Object.assign({
    value: null,
    display: null,
    left: null,
    right: null
  }, primer, {
    hasValue: hasValue,
    hasLeft: hasLeft,
    hasRight: hasRight,
    toString: toString,
    toArray: toArray
  });
};

// exports
module.exports = {
  Factory: Factory
};

/**
 * Returns the string version of the value
 * @returns {String}
 */
function toString () {
  return this.display || this.value.toString();
}

/**
 * Returns the current node and decending nodes as an array
 * @returns {Array}
 */
function toArray () {
  var values = [];

  if (this.hasLeft()) {
    values = values.concat(this.left.toArray());
  }

  if (this.hasValue()) {
    values.push(this);
  }

  if (this.hasRight()) {
    values = values.concat(this.right.toArray());
  }
  
  return values;
}

/**
 * Evaluates the presence of a value
 * @returns {boolean}
 */
function hasValue () {
  return this.value !== null;
}

/**
 * Evaluates the presence of a left value
 * @returns {boolean}
 */
function hasLeft () {
  return this.left !== null;
}

/**
 * Evaluates the presence of a right value
 * @returns {boolean}
 */
function hasRight () {
  return this.right !== null;
}
