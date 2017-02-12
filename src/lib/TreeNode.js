/**
 * @param {Object} [optional] Instance values to override default values
 * @return {Object} Tree Node
 */
var Factory = function (primer) {

  return Object.assign({
    value: null,
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
  var v = this.value;
  var l = this.hasLeft() ? this.left : '';
  var r = this.hasRight() ? this.right : '';
  return l + v + r;
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
    values.push(this.value);
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
