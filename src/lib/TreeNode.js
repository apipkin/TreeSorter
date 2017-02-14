/**
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
 * @returns {String}
 */
function toString () {
  console.log('toString(' + this.display + ')')
  return this.display;
}

/**
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
 * @returns {boolean}
 */
function hasValue () {
  return this.value !== null;
}

/**
 * @returns {boolean}
 */
function hasLeft () {
  return this.left !== null;
}

/**
 * @returns {boolean}
 */
function hasRight () {
  return this.right !== null;
}
